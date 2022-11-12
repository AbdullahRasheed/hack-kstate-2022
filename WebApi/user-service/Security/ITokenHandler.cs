using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace user_service.Security
{
    public interface ITokenHandler
    {

        JwtSecurityToken GenerateToken(List<Claim> claims);

        bool Verify(string cookie);
    }
}
