using Microsoft.AspNetCore.Mvc;
using user_service.Data;

namespace user_service.Controllers
{
    [ApiController]
    [Route("auth")]
    public class LoginController
    {

        [HttpPost("register")]
        public async Task<ActionResult> RegisterUser([FromBody] LoginCredentials creds)
        {

        }

    }
}
