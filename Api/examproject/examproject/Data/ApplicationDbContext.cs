using examproject.model;

using Microsoft.EntityFrameworkCore;

namespace examproject.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        public DbSet<Login> Logins { get; set; }
        public DbSet<Option> Options { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<AnswerValidationResult> answerValidationResults { get; set; }
        public DbSet<AnswerSubmission> answerSubmissions { get; set; }

    }
}
