using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using leaderboard_service.User_DataBase;
using leaderboard_service.LeaderBoard_Data;

namespace leaderboard_service.Data
{
    public class Leaderboard_Data
    {
        [BsonId]
        public ObjectId Id { get; set; }
        public string Name = null!;
        public string Description = null!;

        public List<User_Data> Users { get; set; } = null!;
        


        
    }
}
