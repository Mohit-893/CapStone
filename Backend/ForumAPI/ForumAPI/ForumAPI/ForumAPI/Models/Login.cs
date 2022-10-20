using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ForumAPI.Models
{
    public class Login
    {
        [ForeignKey("UserId")]
       public int  UserId { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
