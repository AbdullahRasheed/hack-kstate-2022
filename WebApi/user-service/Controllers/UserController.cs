using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using System;
using System.Security.Claims;
using user_service.Data;
using user_service.Database;

namespace user_service.Controllers
{

    [ApiController]
    [Route("user")]
    public class UserController : ControllerBase
    {

        private readonly UserService _userService;
        public UserController(UserService userService)
        {
            _userService = userService;
        }


        [Authorize]
        [HttpGet("leaderboards")]
        public async Task<ActionResult> GetLeaderboardIds()
        {
            ObjectId id = ObjectId.Parse(HttpContext.User.Claims.First().Value);

            User? user = await _userService.FindAsync(id);
            if(user is null)
            {
                return BadRequest();
            }

            return Ok(user.Leaderboards);
        }

        [Authorize]
        [HttpPost("join")]
        public async Task<ActionResult> JoinLeaderboard([FromBody] IdRequest id)
        {
            ObjectId uid = ObjectId.Parse(HttpContext.User.Claims.First().Value);

            User? user = await _userService.FindAsync(uid);
            if(user is null)
            {
                return BadRequest();
            }

            await _userService.Push(id.Id, user);

            return Ok();
        }
    }
}
