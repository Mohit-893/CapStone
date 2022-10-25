using ForumAPI.Data;
using ForumAPI.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ForumAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ForumController : ControllerBase
    {
        private readonly APIDBContext _context;

        public ForumController(APIDBContext context)
        {
            _context = context;
        }

        [HttpGet("allposts")]

        public IEnumerable<Posts> GetPosts()
        {
            return _context.Posts.ToList();
        }

    }
}
