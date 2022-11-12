using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace user_service.Security
{
    public class JwtTokenHandler : ITokenHandler
    {

        private readonly JwtSecuritySettings _settings;

        public JwtTokenHandler(JwtSecuritySettings settings)
        {
            _settings = settings;
        }

        public JwtSecurityToken GenerateToken(List<Claim> claimList)
        {
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_settings.SymmetricKey));
            var signature = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(
                issuer: _settings.Issuer,
                audience: _settings.Audience,
                claims: claimList,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: signature
            );

            return token;
        }

        public bool Verify(string cookie)
        {
            throw new NotImplementedException();
        }
    }
}
