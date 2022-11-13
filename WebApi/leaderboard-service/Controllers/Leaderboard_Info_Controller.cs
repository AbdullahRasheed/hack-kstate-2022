using leaderboard_service.Data;
using leaderboard_service.LeaderBoard_Data;
using leaderboard_service.User_DataBase;
using Microsoft.AspNetCore.Mvc;

namespace leaderboard_service.Controllers
{
    [ApiController]
    [Route("LeaderBoard")]
    public class Leaderboard_Info_Controller : ControllerBase
    {

        private readonly LeaderboardService _database;

        public Leaderboard_Info_Controller(LeaderboardService database)
        {
            _database = database;
        }

        [HttpGet("Info")]
        public async Task<ActionResult> Name_And_Description(string id)
        {
            Leaderboard_Data? leaderboard_Data = await _database.FindAsync(id);
            if (leaderboard_Data == null) return NotFound();
            Name_and_Description nd = new Name_and_Description()
            {
                Name = leaderboard_Data.Name,
                Description = leaderboard_Data.Description
            };
            return Ok(nd);
        }

        [HttpGet("Ranking")]
        public async Task<ActionResult> Ranked_Order(string id)
        {
            Leaderboard_Data? leaderboard_Data = await _database.FindAsync(id);
            PriorityQueue<User_Data, DateTime> Ranking = new PriorityQueue<User_Data, DateTime>(); 
            if (leaderboard_Data == null!) return BadRequest();
            foreach (User_Data user in leaderboard_Data.Users){
                Ranking.Enqueue(user, user.Best_Entry.Statistic);
            }
            List<User_Data> users = new List<User_Data>();
            for ( int i = 0; i <10; i++)
            {
                users.Add(Ranking.Dequeue());
            }
            return Ok(users);
        }

        [HttpPost("Create")]
        public async Task<ActionResult> Create_Leaderboard(string name, string description)
        {
            Leaderboard_Data lb = new()
            {
                Name = name,
                Description = description

            };
            await _database.InsertAsync(lb);
            return Ok(lb);
        }


    }
}
