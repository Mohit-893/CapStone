﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ForumAPI.Models
{
    public class Users
    {
        [Key]
        public int UserId { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }

        public string CPassword { get; set; }

        public string EmailAddress { get; set; }

      
        public string LastName{ get; set; }

        public string FirstName { get; set; }
    }
}
