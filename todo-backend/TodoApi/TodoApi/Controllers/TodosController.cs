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
        [HttpPut("{id}/{status}")]
        public async Task<IActionResult> PutTodo(int id, string status)
        {
            var todo = await ctx.Todos.FindAsync(id);
            if (todo == null)
            {
                return NotFound();
            }
            if (!(status.Equals("done")
                || status.Equals("prog")
                || status.Equals("postponed")
                || status.Equals("pending")))
            {
                return BadRequest();
            }

            ctx.Todos.Where(t => t.Id == id).Single().Status = status;

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
        public async Task<ActionResult<Todo>> PostTodo(TodoDTO todo)
        {
            if (!(todo.Status.Equals("done")
                || todo.Status.Equals("prog") 
                || todo.Status.Equals("postponed") 
                || todo.Status.Equals("pending")))
            {
                return BadRequest();
            }
            Todo newTodo = DTOtoItem(todo);
            newTodo.Position = ctx.Todos.Count();
            ctx.Todos.Add(newTodo);
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
                    todos.Position--;
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

        private static Todo DTOtoItem(TodoDTO dto) =>
            new Todo()
            {
                Id = dto.Id,
                Position = dto.Position,
                Title = dto.Title,
                Description = dto.Description,
                DueDate = DateTime.Parse(dto.DueDate),
                Status = dto.Status
            };
    }
}
