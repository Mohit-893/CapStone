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

        [HttpGet("allpostsbykeyword/{keyword}")]
        public IEnumerable<Posts> SearchbyKeyword(string keyword)
        {
            return _context.Posts.Where(x => x.title.Contains(keyword) || x.body.Contains(keyword)).ToList();
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

        [HttpGet("allComments/{id}")]
        public IEnumerable<Comments> GetComments(int id)
        {
            return _context.Comments.Where(x => x.postID == id).ToList();
        }

        [HttpGet("getpostbyUserId/{id}")]
        public IEnumerable<Posts> GetPostByUserId(int id)
        {
            return _context.Posts.Where(x => x.UserId == id).ToList();
        }

        [HttpGet("getcommentbyUserId/{id}")]
        public IEnumerable<Comments> GetCommentsByUserId(int id)
        {
            return _context.Comments.Where(x => x.UserId == id).ToList();
        }

        [HttpGet("getUserDetails/{id}")]
        public IEnumerable<Users> GetUser(int id)
        {
            return _context.Users.Where(x => x.UserId == id).ToList();
        }


    }
}
