using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ForumAPI.Models
{
    public class Comment
    {
        [Key]
        public int commentID { get; set; }

        [ForeignKey("UserId")]
        public int UserId { get; set; }

        public string comment { get; set; }

        [ForeignKey("postID")]
        public int postID { get; set; } 
    }
}
