using Microsoft.EntityFrameworkCore;
using TodoApi.Models;

namespace TodoApi.Dal
{
    public class TodoContext : DbContext
    {
        public TodoContext(DbContextOptions<TodoContext> options) 
            : base(options) { }
        public DbSet<Todo> Todos { get; set;  } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Todo>()
                .HasKey(t => t.Id);
            modelBuilder.Entity<Todo>()
                .Property(t => t.Id).ValueGeneratedOnAdd();

            base.OnModelCreating(modelBuilder);
        }
    }
}
