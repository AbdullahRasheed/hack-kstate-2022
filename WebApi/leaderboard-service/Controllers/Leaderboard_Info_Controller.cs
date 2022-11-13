using leaderboard_service.Data;
using leaderboard_service.LeaderBoard_Data;
using leaderboard_service.User_DataBase;
using Microsoft.AspNetCore.Mvc;

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

        [HttpGet("info")]
        public async Task<ActionResult> GetInfo(string id)
        {
            Leaderboard_Data? lb = await _leaderboardService.FindAsync(id);
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
        public async Task<ActionResult> CreateLeaderboard(string name, string description)
        {
            await _leaderboardService.InsertAsync(new Leaderboard_Data { Name = name, Description = description, Users = new() });
            return Ok();
        }

        [HttpGet("search")]
        public async Task<ActionResult> SearchLeaderboard(string name)
        {
            Leaderboard_Data? lb = await _leaderboardService.FindByNameAsync(name);
            if (lb is null) return BadRequest();

            return Ok(lb.Id.ToString());
        }
    }
}
