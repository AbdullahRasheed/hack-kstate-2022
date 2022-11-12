namespace leaderboard_service.User_DataBase
{
    public class LeaderboardDatabaseSettings
    {

        public string ConnectionString { get; set; } = null!;

        public string DatabaseName { get; set; } = null!;

        public string LeaderboardCollectionName { get; set; } = null!;

        public string UserLeaderboardCollectionName { get; set; } = null!;
    }
}
