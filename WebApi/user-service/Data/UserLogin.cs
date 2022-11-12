using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace user_service.Data
{
    public class UserLogin
    {

        [BsonId]
        public ObjectId Id { get; set; }

        public string Username { get; set; } = string.Empty;

        public byte[] PasswordHash { get; set; } = new byte[0];

        public byte[] PasswordSalt { get; set; } = new byte[0];
    }
}
