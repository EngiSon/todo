namespace TodoApi.Models
{
    public class Todo
    {
        public int Id { get; set; }
        public int? Position { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public DateTime? DueDate { get; set; }
        public string Status { get; set; }
    }
}
