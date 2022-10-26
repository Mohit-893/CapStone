using ForumAPI.Data;
using ForumAPI.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace ForumAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly APIDBContext _context;
        private readonly IConfiguration _config;

        public LoginController(APIDBContext context, IConfiguration config)
        {
            _context = context;
            _config = config;

        }

        [AllowAnonymous]
        [HttpPost("gettoken")]

        public IActionResult Login([FromBody] Login login)
        {
            var user = Authenticate(login);
            if (user != null)
            {
                var token = Generate(user);
                return Ok(token);
            }

            return NotFound("User not Found");
        }

        private string Generate(Users user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var s = user.UserId.ToString();
           var claims = new[]
            {
               
                new Claim("userId",s),
                new Claim("NameIdentifier",user.Username),
                new Claim("Email",user.EmailAddress),
                new Claim("GivenName",user.FirstName),
                new Claim("Surname",user.LastName),


            };

         var token = new JwtSecurityToken(_config["Jwt:Issuer"],
        _config["Jwt:Audience"],
        claims,
        expires: DateTime.Now.AddMinutes(15),
        signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);

        }
        private Users Authenticate(Login login)
        {
            var currentUser = _context.Users.FirstOrDefault(o => o.Username.ToLower() == login.Username.ToLower() && o.Password == login.Password);
            if (currentUser != null)
            {
                return currentUser;
            }
            return null;
        }

        [HttpGet("GetUserdetails")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult UserDetails()
        {
            var currentuser = GetCurrentUser();
            return Ok($"Hi {currentuser.FirstName} {currentuser.LastName}");
        }

        private Users GetCurrentUser()
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;
            if (identity != null)
            {
                var userClaims = identity.Claims;
                var user = new Users()
                {
                    Username = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.NameIdentifier)?.Value,
                    EmailAddress = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.Email)?.Value,
                    FirstName = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.GivenName)?.Value,
                    LastName = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.Surname)?.Value,
                    
                };
                return user;

            }
            return null;
        }

     

        [HttpGet("getallusers")]
        public IEnumerable<Users> GetUsers()
        {
            return _context.Users.ToList();
        }

        [HttpPost("register")]

        public async Task<IActionResult> PostUser(Users user)
        {
          await _context.Users.AddAsync(user);
            _context.SaveChanges();
            return Ok(user);
        }

    }
}
