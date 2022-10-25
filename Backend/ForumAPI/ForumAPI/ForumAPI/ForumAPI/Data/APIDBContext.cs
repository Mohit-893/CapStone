using ForumAPI.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ForumAPI.Data
{
    public class APIDBContext : DbContext
    {
        public APIDBContext()
        {
                
        }
        public APIDBContext( DbContextOptions<APIDBContext> options) : base(options)
        {

        }

        public virtual DbSet<Users> Users { get; set; }
        public virtual DbSet<Categories> Categories { get; set; }

        public virtual DbSet<Comments> Comments { get; set; }

        public virtual DbSet<Posts> Posts { get; set; }
    }
}
