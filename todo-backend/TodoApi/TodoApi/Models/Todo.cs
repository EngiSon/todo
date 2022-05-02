namespace TodoApi.Models
{
    public class Todo
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public DateTime? DueDate { get; set; }
        public Status Status { get; set; }
    }

    public enum Status
    {
        DONE,
        PROG,
        POSTPONED,
        PENDING
    }
}
