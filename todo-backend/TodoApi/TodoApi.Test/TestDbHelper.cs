using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using TodoApi.Dal;

namespace TodoApi.Test
{
    public static class TestDbHelper
    {
        public static SqliteConnection CreateConnection()
        {
            var conn = new SqliteConnection(@"DataSource=:memory:");
            conn.Open();
            return conn;
        }

        public static TodoContext CreateDbContext(SqliteConnection connection)
        {
            var dbContextOptions = new DbContextOptionsBuilder<TodoContext>()
                                    .UseSqlite(connection)
                                    .Options;
            var dbContext = new TodoContext(dbContextOptions);
            dbContext.Database.EnsureCreated();
            return dbContext;
        }
    }

}