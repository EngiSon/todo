import { Stack } from '@mui/material';
import { useState } from 'react';
import './App.css';
import InputRow from './components/InputRow';
import TodoCard from './components/TodoCard';
import ToggleButtons from './components/ToggleButtons';

class Todo {
  constructor(id, position, name, description, dueDate, status) {
    this.id = id;
    this.position = position;
    this.name = name;
    this.desc = description;
    this.date = dueDate;
    this.status = status;
  }
}

function App() {
  const axios = require('axios').default;
  const uri = 'http://localhost:5160/api/todos'
  const [todos, setTodos] = useState(getAllTodos());
  const [filtStatus, setFiltStatus] = useState('prog');
  
  const todosList = todos.filter(todo => todo.status === filtStatus).map(todo => (
    <TodoCard
      id = {todo.id}
      key = {todo.id}
      name = {todo.name}
      desc = {todo.desc}
      date = {todo.date}
      deleteTodo = {deleteTodo}
      moveTodo = {moveTodo}
      setStatus = {setStatus}
    />
  ))

  async function addTodo(name, desc, date) {
    try {
      axios.post(uri,
        {
          Title: name,
          Description: desc,
          DueDate: date,
          Status: "prog"
        })
    } catch (error) {
      console.error(error)
    }
    setTodos(getAllTodos())
  }

  async function deleteTodo(id) {
    try {
      axios.delete(uri+"/"+id)
    } catch (error) {
      console.error(error)
    }
    setTodos(getAllTodos())
  }

  async function moveTodo(id, dir) {
    const indexOfMoving = todos.indexOf(todos.find(todo => id === todo.id));
    if (
      !(indexOfMoving === 0 && dir === 1)
      && !(indexOfMoving === todos.length - 1 && dir === -1)) {
      if (dir === -1) {
        try {
          axios.put(uri+"/"+id+"/movedown")
        } catch (error) {
          console.error(error)
        }
      } else if (dir === 1) {
        try {
          axios.put(uri+"/"+id+"/moveup")
        } catch (error) {
          console.error(error)
        }
      }
      setTodos(getAllTodos());
    } else {
      return
    }
  }

  async function setStatus(id, stat) {
    const newTodo = await todos.find(todo => todo.id === id)
    try {
      axios.put(uri+"/"+id, {
        Id: newTodo.id,
        Position: newTodo.position,
        Title: newTodo.title,
        Description: newTodo.description,
        DueDate: newTodo.date,
        Status: stat
      })
    } catch (error) {
      console.error(error)
    }
    setTodos(getAllTodos())
  }

  function setFilteredStatus(status) {
    setFiltStatus(status)
  }

  function getAllTodos() {
    try {
      let newTodos = []
      //axios.get(uri).then(result => result.data).then(todo => newTodos.push(new Todo(todo.Id, todo.Position, todo.Name, todo.Description, todo.DueDate, todo.Status)))
      // for (var todo of response) {
      //   newTodos.push(
      //     new Todo(todo.Id, todo.Position, todo.Name, todo.Description, todo.DueDate, todo.Status)
      //   )
      // }
      return newTodos
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div id='app-container'>
      <h2 id='centered'>Todo app</h2>
      <div id='centered'>
        <InputRow id='input-row' addTodo={addTodo}/>
      </div>
      <div id='centered-topmargin'>
        <ToggleButtons setFilteredStatus={setFilteredStatus}/>
      </div>
      <div id='centered-topmargin'>
        <Stack spacing={0.5}>
          {todosList}
        </Stack>
      </div>
    </div>
  );
}

export default App;