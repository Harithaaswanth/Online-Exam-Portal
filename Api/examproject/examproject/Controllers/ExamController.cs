using examproject.Data;
using examproject.model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace examproject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExamController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public ExamController(ApplicationDbContext context)
        {
            _context = context;



        }


        [HttpGet("{id}")]
        public async Task<ActionResult<string>> GetQuestionName(int id)
        {
            var question = await _context.Questions.FindAsync(id);
            if (question == null)
            {
                return NotFound();
            }

            return question.Questionname;
        }


        [HttpGet("Names")] 
        public async Task<ActionResult<IEnumerable<string>>> GetQuestionNames() 
        { 
            var questionNames = await _context.Questions.Select(q => q.Questionname).ToListAsync(); 
            return Ok(questionNames); 
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Question>>> GetProducts()
        {
            return await _context.Questions.ToListAsync();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var exam = await _context.Questions.FindAsync(id);
            if (exam == null)
            {
                return NotFound();
            }

            _context.Questions.Remove(exam);
            await _context.SaveChangesAsync();

            return NoContent();
        }



            [HttpPut("{id}")]
            public async Task<IActionResult> EditQuestion(int id,  Question question)
            {
                if (id != question.questionid)
                {
                    return BadRequest();
                }

                var existingQuestion = await _context.Questions.FindAsync(id);
                if (existingQuestion == null)
                {
                    return NotFound();
                }

                existingQuestion.Questionname = question.Questionname;
                existingQuestion.Answer = question.Answer;

                try
                {
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!_context.Questions.Any(e => e.questionid == id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }

                return NoContent();
            }







        [HttpPost("SubmitAnswers")]
        public async Task<ActionResult<IEnumerable<AnswerValidationResult>>> SubmitAnswers([FromBody] List<AnswerSubmission> submissions)
        {
            if (submissions == null || !submissions.Any())
            {
                return BadRequest("No submissions provided.");
            }

            var questionIds = submissions.Select(s => s.QuestionId).ToList();
            var questions = await _context.Questions
                                          .Where(q => questionIds.Contains(q.questionid))
                                          .ToListAsync();

            var results = new List<AnswerValidationResult>();

            foreach (var submission in submissions)
            {
                var question = questions.FirstOrDefault(q => q.questionid == submission.QuestionId);
                if (question != null)
                {
                    results.Add(new AnswerValidationResult
                    {
                        QuestionId = submission.QuestionId,
                        SubmittedAnswer = submission.Answer,
                        IsCorrect = submission.Answer.Trim().ToLower() == question.Answer.Trim().ToLower(),
                        CorrectAnswer = question.Answer
                    });
                }
            }

            return Ok(results);
        }






        [HttpPost("login")]
        public async Task<ActionResult<Login>> Login(Login user)
        {
            // Find user by username
            var userlogin = await _context.Logins.SingleOrDefaultAsync(u => u.username == user.username);

            if (userlogin == null || user.password != userlogin.password)
            {
                return Unauthorized("Invalid username or password.");
            }

            var role = "";

            if (userlogin.post == "Admin")
            {
                role = "Admin";
            }
          
            else
            {
                role = "User";
            }
            return Ok(new { message = "Login successful", role });
        }


        [HttpPost("register")]
        public async Task<ActionResult<Login>> Register(Login users)
        {
            if (_context.Logins.Any(u => u.username == users.username))
            {
                return BadRequest("Username already exists.");
            }
            var user = new Login
            {
                username = users.username,
                password = users.password,
              
                email = users.email,    
                post = users.post,

            };
            _context.Logins.Add(user);
            _context.SaveChanges();
            return Ok("Successfully registerd new employee");
        }

        [HttpPost("AddQuestion")]
        public async Task<ActionResult<Login>> Question(Question question)
        {
            if (_context.Questions.Any(u => u.Questionname == question.Questionname))
            {
                return BadRequest("This Question is already exists.");
            }

            var question1 = new Question
                    {
                        Questionname = question.Questionname,
                        Answer=question.Answer,
                    };

                    _context.Questions.Add(question1);
                  
                    _context.SaveChanges();

                    return Ok("Questions added successfully!");
                }
            }

    

    

}
