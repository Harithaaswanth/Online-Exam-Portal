using System.ComponentModel.DataAnnotations;

namespace examproject.model
{
    public class AnswerValidationResult
    {
        [Key]
            public int QuestionId { get; set; }
            public string SubmittedAnswer { get; set; }
            public bool IsCorrect { get; set; }
            public string CorrectAnswer { get; set; }
        

    }
}
