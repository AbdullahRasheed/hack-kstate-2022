using MongoDB.Bson;

namespace leaderboard_service.User_DataBase
{
    public class User_Data
    {
        public ObjectId Id { get; set; }

        public List<Entry> Entries { get; set; }

    }
}