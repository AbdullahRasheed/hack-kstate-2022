using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace user_service.Data
{
    public class User
    {

        [BsonId]
        public ObjectId Id { get; set; }

        public string Username { get; set; } = null!;

        public List<ObjectId> Leaderboards { get; set; } = null!;
    }
}
