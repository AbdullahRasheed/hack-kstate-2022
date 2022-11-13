using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using leaderboard_service.User_DataBase;


namespace leaderboard_service.Data
{
    public class Leaderboard_Data
    {
        [BsonId]
        public ObjectId Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public List<User_Data> Users { get; set; }
    }
}
