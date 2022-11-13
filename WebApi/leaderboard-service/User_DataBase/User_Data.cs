using MongoDB.Bson;

namespace leaderboard_service.User_DataBase
{
    public class User_Data
    {
        public ObjectId Id { get; set; }

        public Entry Best_Entry = null!;

        public List<Entry> Entries = null!;
    }
}