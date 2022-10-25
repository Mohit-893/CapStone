using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace ForumAPI.Models
{
    public class Posts
    {
        [Key]
        public int postID { get; set; }
        [ForeignKey("categoryId")]
        public int categoryId { get; set; }

        [ForeignKey("UserId")]
        public int UserId { get; set; }

        //[ForeignKey("commentID")]
        //public int commentID { get; set; }

        public int Likes { get; set; }

        public int Dislikes { get; set; }

        public string authorName { get; set; }

        public string title { get; set; }

        public string body { get; set; }

        public int viewsCount { get; set; }
    }
}