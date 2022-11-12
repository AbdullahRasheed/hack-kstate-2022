namespace user_service.Security
{
    public class JwtSecuritySettings
    {

        public string SymmetricKey { get; set; } = null!;

        public string Issuer { get; set; } = null!;

        public string Audience { get; set; } = null!;
    }
}
