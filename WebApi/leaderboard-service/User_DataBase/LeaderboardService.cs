using leaderboard_service.Data;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;

namespace leaderboard_service.User_DataBase
{
    public class LeaderboardService
    {

        private readonly IMongoCollection<Leaderboard_Data> _collection;

        public LeaderboardService(IOptions<LeaderboardDatabaseSettings> databaseSettings)
        {
            var mongoClient = new MongoClient(databaseSettings.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(databaseSettings.Value.DatabaseName);

            _collection = mongoDatabase.GetCollection<Leaderboard_Data>(databaseSettings.Value.LeaderboardCollectionName);
        }

        public async Task<Leaderboard_Data?> FindAsync(string id) => await _collection.Find(lb => id.ToString() == lb.Id.ToString()).FirstOrDefaultAsync();

        public async Task<Leaderboard_Data?> FindAsync(ObjectId id) => await _collection.Find(lb => id.Equals(lb.Id)).FirstOrDefaultAsync();

        public async Task InsertAsync(Leaderboard_Data lb) => await _collection.InsertOneAsync(lb);

        public async Task ReplaceAsync(string id, Leaderboard_Data lb) => await _collection.ReplaceOneAsync(lb => id.ToString() == user.Id.ToString(), user);
    }
}
