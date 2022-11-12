using MongoDB.Bson;

namespace leaderboard_service.User_DataBase
{
    public class User_Database
    {
        [BsonID]
        public ObjectId Id { get; set; }
        public List<User_Data> Users { get; set; }


    }
}
