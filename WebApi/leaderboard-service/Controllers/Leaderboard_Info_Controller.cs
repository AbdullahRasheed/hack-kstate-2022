using leaderboard_service.Data;
using leaderboard_service.LeaderBoard_Data;
using leaderboard_service.User_DataBase;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;

namespace leaderboard_service.Controllers
{

    [ApiController]
    [Route("leaderboard")]
    public class Leaderboard_Info_Controller : ControllerBase
    {

        private readonly LeaderboardService _leaderboardService;
        public Leaderboard_Info_Controller(LeaderboardService leaderboardService)
        {
            _leaderboardService = leaderboardService;
        }

        [HttpPost("info")]
        public async Task<ActionResult> GetInfo([FromBody] IdRequest id)
        {
            ObjectId oid = ObjectId.Parse(id.Id);
            Leaderboard_Data? lb = await _leaderboardService.FindAsync(oid);
            if(lb is null)
            {
                return BadRequest();
            }

            return Ok(new Name_And_Description
            {
                Name = lb.Name,
                Description = lb.Description
            });
        }

        [HttpPost("create")]
        public async Task<ActionResult> CreateLeaderboard([FromBody] Name_And_Description nd)
        {
            await _leaderboardService.InsertAsync(new Leaderboard_Data { Name = nd.Name, Description = nd.Description, Users = new() });
            return Ok();
        }

        [HttpPost("search")]
        public async Task<ActionResult> SearchLeaderboard([FromBody] NameRequest name)
        {
            Leaderboard_Data? lb = await _leaderboardService.FindByNameAsync(name.Name);
            if (lb is null) return BadRequest();

            return Ok(lb.Id.ToString());
        }

        [HttpPost("top")]
        public async Task<ActionResult> SortTop([FromBody] IdRequest id)
        {
            Leaderboard_Data? lb = await _leaderboardService.FindAsync(id.Id);
            if(lb is null)
            {
                return BadRequest();
            }
            
            PriorityQueue<User_Data, DateTime> heap = new();

            foreach(User_Data user in lb.Users)
            {
                heap.Enqueue(user, user.BestEntry);
            }

            List<User_Data> users = new();
            for(int i = 0; i < 10; i++)
            {
                users.Add(heap.Dequeue());
            }

            return Ok(users);
        }
    }
}
