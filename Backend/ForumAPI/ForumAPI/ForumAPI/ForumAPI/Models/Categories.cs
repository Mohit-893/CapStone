using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ForumAPI.Models
{
    public class Categories
    {
        [Key]
        public int categoryId { get; set; }
        public string categoryName { get; set; }
    }
}
