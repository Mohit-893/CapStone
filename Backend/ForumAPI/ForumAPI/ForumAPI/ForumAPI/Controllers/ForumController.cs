using ForumAPI.Data;
using ForumAPI.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

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

        public IActionResult GetPosts()
        {
            try
            {
                var allPosts =  _context.Posts.ToList();
                return Ok(allPosts);
            }
            catch(Exception ex)
            {
              return BadRequest(ex.Message);
            }
        }


        [HttpGet("allposts/{id}")]
        public IActionResult SearchbyId(int id)
        {
            try
            {
                var postId = _context.Posts.Where(x => x.categoryId == id).ToList();
                return Ok(postId);
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("allpostsbykeyword/{keyword}")]
        public IActionResult SearchbyKeyword(string keyword)
        {
            try {
                
                 var Keyword =  _context.Posts.Where(x => x.title.Contains(keyword) || x.body.Contains(keyword)).ToList();
                return Ok(Keyword);
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
            }


        [HttpPost("addquestion")]
        public void AddPost(Posts pst)
        {
            try
            {
                _context.Posts.Add(pst);
                _context.SaveChanges();
            }
            catch(Exception ex)
            {
                BadRequest(ex.Message);
            }
        }


        [HttpPost("postAnswer")]
        public void AddComment(Comments cmt)
        {
            try
            {
                _context.Comments.Add(cmt);
                _context.SaveChanges();
            }
            catch(Exception ex) {
                BadRequest(ex.Message);
            }

        }

        [HttpGet("allComments/{id}")]
        public IActionResult GetComments(int id)
        {
            try
            {
                var comments =  _context.Comments.Where(x => x.postID == id).ToList();
                return Ok(comments);

            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("getpostbyUserId/{id}")]
        public IActionResult GetPostByUserId(int id)
        {
            try
            {
                var postuser = _context.Posts.Where(x => x.UserId == id).ToList();
                return Ok(postuser);

            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("getcommentbyUserId/{id}")]
        public IActionResult GetCommentsByUserId(int id)
        {
            try
            {
                var commentsUser = _context.Comments.Where(x => x.UserId == id).ToList();
                return Ok(commentsUser);
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("getUserDetails/{id}")]
        public IActionResult GetUser(int id)
        {
            try
            {
                var getUser = _context.Users.Where(x => x.UserId == id).ToList();
                return Ok(getUser);
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


    }
}
