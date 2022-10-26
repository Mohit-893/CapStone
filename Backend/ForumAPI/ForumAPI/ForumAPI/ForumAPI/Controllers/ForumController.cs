using ForumAPI.Data;
using ForumAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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


        [HttpGet("allposts/{id}")]
        public IEnumerable<Posts> SearchbyId(int id)
        {
            return  _context.Posts.Where(x => x.categoryId == id).ToList();
        }
        [HttpPost("addquestion")]
        public void AddPost(Posts pst)
        {
            _context.Posts.Add(pst);
            _context.SaveChanges();
        }

        [HttpPost("postAnswer")]
        public void AddComment(Comments cmt)
        {
            _context.Comments.Add(cmt);
            _context.SaveChanges();
        }

    }
}
