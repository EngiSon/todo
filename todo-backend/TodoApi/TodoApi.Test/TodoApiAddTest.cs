using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Linq;
using TodoApi.Controllers;
using TodoApi.Models;

namespace TodoApi.Test
{
    [TestClass]
    public class TodoApiAddTest
    {
        private readonly TodoDTO testTodo = new TodoDTO()
        {
            Title = "Test123",
            Description = "TestDescription",
            DueDate = "Jan 1, 2009",
            Status = "DONE"
        };

        [TestMethod]
        public void AddToDb_ShouldReturnOne()
        {
            using (var dbConn = TestDbHelper.CreateConnection())
            {
                var dbContext = TestDbHelper.CreateDbContext(dbConn);
                var controller = new TodosController(dbContext);

                controller.PostTodo(testTodo);

                Assert.AreEqual(1, dbContext.Todos.Count());
            }
        }
    }
}