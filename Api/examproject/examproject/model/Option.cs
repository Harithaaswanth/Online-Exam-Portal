using System.ComponentModel.DataAnnotations;

namespace examproject.model
{
    public class Option
    {
        [Key]
        public int opnid { get; set; }
        public int Questionid { get; set; }
        public string opn1 { get; set; }
        public string opn2 { get; set; }
        public string opn3 { get; set; }
        public string opn4 { get; set; }
        public string ansr { get; set; }
    }
}
