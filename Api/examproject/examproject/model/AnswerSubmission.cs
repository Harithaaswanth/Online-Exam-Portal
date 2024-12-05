using System.ComponentModel.DataAnnotations;

namespace examproject.model
{
    public class AnswerSubmission
    {
        [Key]
            public int QuestionId { get; set; }
            public string Answer { get; set; }
        

    }
}
