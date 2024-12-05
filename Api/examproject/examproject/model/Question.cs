using System.ComponentModel.DataAnnotations;

namespace examproject.model
{
    public class Question
    {
        [Key]
        public int questionid { get; set; }
        public string Questionname { get; set; }
        public string Answer { get; set; }

    }
}
