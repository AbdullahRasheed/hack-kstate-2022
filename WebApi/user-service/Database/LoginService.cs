using Microsoft.Extensions.Options;
using MongoDB.Driver;
using user_service.Data;

namespace user_service.Database
{
    public class LoginService
    {

        private readonly IMongoCollection<UserLogin> _userCollection;

        public LoginService(IOptions<UserDatabaseSettings> userDatabaseSettings)
        {
            var mongoClient = new MongoClient(userDatabaseSettings.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(userDatabaseSettings.Value.DatabaseName);

            _userCollection = mongoDatabase.GetCollection<UserLogin>(userDatabaseSettings.Value.LoginCollectionName);
        }

        public async Task<UserLogin?> FindAsync(string id) => await _userCollection.Find(user => id.ToString() == user.Id.ToString()).FirstOrDefaultAsync();

        public async Task<UserLogin?> FindByUsernameAsync(string username) => await _userCollection.Find(user => username == user.Username).FirstOrDefaultAsync();

        public async Task InsertAsync(UserLogin user) => await _userCollection.InsertOneAsync(user);

        public async Task ReplaceAsync(string id, UserLogin user) => await _userCollection.ReplaceOneAsync(user => id.ToString() == user.Id.ToString(), user);

    }
}
