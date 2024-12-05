using System.ComponentModel.DataAnnotations;

namespace examproject.model
{
    public class Login
    {
        [Key]
        public int userid { get; set; }
        public string username { get; set; }
        public string password { get; set; }
   
        public string email { get; set; }
        public string post { get; set; }

    }
}
