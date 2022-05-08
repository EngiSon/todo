#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoApi.Dal;
using TodoApi.Models;

namespace TodoApi.Controllers
{
    [Route("api/Todos")]
    [ApiController]
    public class TodosController : ControllerBase
    {
        private readonly TodoContext ctx;

        public TodosController(TodoContext context)
        {
            ctx = context;
        }

        // GET: api/Todos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Todo>>> GetTodoItems()
        {
            return await ctx.Todos.OrderByDescending(t => t.Position).ToListAsync();
        }

        // GET: api/Todos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Todo>> GetTodo(int id)
        {
            var todo = await ctx.Todos.FindAsync(id);

            if (todo == null)
            {
                return NotFound();
            }

            return todo;
        }

        // PUT: api/Todos/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTodo(int id, Todo todo)
        {
            if (id != todo.Id)
            {
                return BadRequest();
            }

            ctx.Entry(todo).State = EntityState.Modified;

            try
            {
                await ctx.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TodoExists(id))
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

        // POST: api/Todos
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Todo>> PostTodo(Todo todo)
        {
            todo.Position = ctx.Todos.Count();
            ctx.Todos.Add(todo);
            await ctx.SaveChangesAsync();

            return CreatedAtAction(nameof(GetTodo), new { id = todo.Id }, todo);
        }

        // DELETE: api/Todos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTodo(int id)
        {
            var todo = await ctx.Todos.FindAsync(id);
            if (todo == null)
            {
                return NotFound();
            }
            foreach (var todos in ctx.Todos)
            {
                if (todos.Position > todo.Position)
                {
                    todo.Position--;
                }
            }
            ctx.Todos.Remove(todo);
            await ctx.SaveChangesAsync();

            return NoContent();
        }

        [HttpPut("{id}/moveup")]
        public async Task<IActionResult> MoveTodoUp(int id)
        {
            var todo = await ctx.Todos.FindAsync(id);
            if (todo == null)
            {
                return NotFound();
            } else if (ctx.Todos.Count() == todo.Position + 1)
            {
                return BadRequest();
            }

            ctx.Todos.Where(t => t.Position == todo.Position + 1).Single().Position -= 1;
            todo.Position += 1;

            await ctx.SaveChangesAsync();

            return NoContent();
        }

        [HttpPut("{id}/movedown")]
        public async Task<IActionResult> MoveTodoDown(int id)
        {
            var todo = await ctx.Todos.FindAsync(id);
            if (todo == null)
            {
                return NotFound();
            }
            else if (todo.Position == 0)
            {
                return BadRequest();
            }

            ctx.Todos.Where(t => t.Position == todo.Position - 1).Single().Position += 1;
            todo.Position -= 1;

            await ctx.SaveChangesAsync();

            return NoContent();
        }

        private bool TodoExists(int id)
        {
            return ctx.Todos.Any(e => e.Id == id);
        }
    }
}
