namespace TodoApi.Models
{
    public class TodoDTO
    {
        public int Id { get; set; }
        public int Position { get; set; }

        public string? Title { get; set; }
        public string? Description { get; set; }
        public string? DueDate { get; set; }
        public string Status { get; set; }

    }
}
