using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using user_service.Data;
using user_service.Database;
using user_service.Security;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;

namespace user_service.Controllers
{
    [ApiController]
    [Route("auth")]
    public class LoginController : ControllerBase
    {

        private readonly LoginService _loginService;
        private readonly UserService _userService;

        public LoginController(LoginService loginService, UserService userService)
        {
            _loginService = loginService;
            _userService = userService;
        }

        [HttpPost("register")]
        public async Task<ActionResult> RegisterUser([FromBody] LoginCredentials creds)
        {
            UserLogin? login = await _loginService.FindByUsernameAsync(creds.Username);
            if (login is not null)
            {
                return BadRequest("Username already exists");
            }

            byte[] salt;
            byte[] hash = GetHash(creds.Password, out salt);

            UserLogin newLogin = new UserLogin
            {
                Username = creds.Username,
                PasswordHash = hash,
                PasswordSalt = salt
            };

            await _loginService.InsertAsync(newLogin);
            await _userService.InsertAsync(new User
            {
                Id = newLogin.Id,
                Username = creds.Username,
                Leaderboards = new()
            });

            await GenerateToken(new()
            {
                new Claim(ClaimTypes.NameIdentifier, newLogin.Id.ToString())
            });

            return Ok();
        }

        [HttpPost]
        public async Task<ActionResult> LoginUser([FromBody] LoginCredentials creds)
        {
            UserLogin? login = await _loginService.FindByUsernameAsync(creds.Username);
            if (login is null)
            {
                return BadRequest();
            }

            if(Verify(creds.Password, login.PasswordHash, login.PasswordSalt))
            {
                var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.NameIdentifier, login.Id.ToString())
                };

                await GenerateToken(claims);

                return Ok();
            }

            return BadRequest();
        }

        [ApiExplorerSettings(IgnoreApi = true)]
        public async Task GenerateToken(List<Claim> claims)
        {
            var identity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);
            var properties = new AuthenticationProperties
            {
                IsPersistent = true,
                AllowRefresh = true
            };

            await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(identity), properties);
        }

        [ApiExplorerSettings(IgnoreApi = true)]
        private byte[] GetHash(string t, out byte[] salt)
        {
            using (var func = new HMACSHA512())
            {
                salt = func.Key;
                return func.ComputeHash(Encoding.UTF8.GetBytes(t));
            }
        }

        [ApiExplorerSettings(IgnoreApi = true)]
        private bool Verify(string t, byte[] hash, byte[] salt)
        {
            using (var func = new HMACSHA512(salt))
            {
                return hash.SequenceEqual(func.ComputeHash(Encoding.UTF8.GetBytes(t)));
            }
        }

    }
}
