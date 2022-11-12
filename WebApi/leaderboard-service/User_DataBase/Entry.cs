using MongoDB.Bson;

namespace leaderboard_service.User_DataBase
{
    public class Entry
    {
        public ObjectId Id { get; set; }

        public DateTime DateTime { get; set; }

        public DateTime Statistic { get; set; }

    }
}