using Server.Data;
using Microsoft.AspNetCore.Mvc;
using Server.DTOs;

namespace Server.Controllers
{
    public class BuggyController : BaseController
    {

        private readonly DataContext _context;
        public BuggyController(DataContext context)
        {
            _context = context;
        }

        /*
        [Authorize]
        [HttpGet("auth")]
        public ActionResult<string> GetSecret()
        {
            return "secret text";
        }
        */

        [HttpGet("not-found")]
        public ActionResult<UserDto> GetNotFound()
        {
            var thing = _context.Users.Find(-1);
            if (thing == null) return NotFound();
            return Ok(thing);
        }

        [HttpGet("server-error")]
        public ActionResult<string> GetServerError()
        {
            var thing = _context.Users.Find(-1);
            var thingToReturn = thing!.ToString();
            return thingToReturn!;
        }

        [HttpGet("bad-request")]
        public ActionResult<string> GetBadRequest()
        {
            return BadRequest();
        }
    }
}