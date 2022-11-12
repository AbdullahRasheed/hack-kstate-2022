﻿using Microsoft.Extensions.Options;
using MongoDB.Driver;
using user_service.Data;

namespace user_service.Database
{
    public class UserService
    {

        private readonly IMongoCollection<User> _userCollection;

        public UserService(IOptions<UserDatabaseSettings> userDatabaseSettings)
        {
            var mongoClient = new MongoClient(userDatabaseSettings.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(userDatabaseSettings.Value.DatabaseName);

            _userCollection = mongoDatabase.GetCollection<User>(userDatabaseSettings.Value.UserCollectionName);
        }

        public async Task<User?> FindAsync(string id) => await _userCollection.Find(user => id.ToString() == user.Id.ToString()).FirstOrDefaultAsync();

        public async Task<User?> FindByUsernameAsync(string username) => await _userCollection.Find(user => username == user.Username).FirstOrDefaultAsync();

        public async Task InsertAsync(User user) => await _userCollection.InsertOneAsync(user);

        public async Task ReplaceAsync(string id, User user) => await _userCollection.ReplaceOneAsync(user => id.ToString() == user.Id.ToString(), user);

    }
}
