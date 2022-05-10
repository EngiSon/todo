import { Stack } from '@mui/material';
import { useState } from 'react';
import './App.css';
import InputRow from './components/InputRow';
import TodoCard from './components/TodoCard';
import ToggleButtons from './components/ToggleButtons';

class Todo {
  constructor(id, position, name, description, duedate, status) {
    this.id = id;
    this.position = position;
    this.title = name;
    this.description= description;
    this.dueDate = duedate;
    this.status = status;
  }
}

function App() {
  const axios = require('axios').default;
  const uri = 'http://localhost:5160/api/todos'
  const [todos, setTodos] = useState([]);
  const [filtStatus, setFiltStatus] = useState('prog');
  
  
  const todosList = todos.filter(todo => todo.status === filtStatus).map(todo => (
    <TodoCard
      id = {todo.id}
      key = {todo.id}
      name = {todo.title}
      desc = {todo.description}
      date = {todo.dueDate}
      deleteTodo = {deleteTodo}
      moveTodo = {moveTodo}
      setStatus = {setStatus}
    />
  ))

  async function addTodo(name, desc, date) {
    try {
      await axios.post(uri,
        {
          Title: name,
          Description: desc,
          DueDate: date,
          Status: "prog"
        })
    } catch (error) {
      console.error(error)
    }
    getAllTodos()
  }

  async function deleteTodo(id) {
    try {
      await axios.delete(uri+"/"+id)
    } catch (error) {
      console.error(error)
    }
    getAllTodos()
  }

  async function moveTodo(id, dir) {
    const indexOfMoving = todos.indexOf(todos.find(todo => id === todo.Id));
    if (
      !(indexOfMoving === 0 && dir === 1)
      && !(indexOfMoving === todos.length - 1 && dir === -1)) {
      if (dir === -1) {
        try {
          await axios.put(uri+"/"+id+"/movedown")
        } catch (error) {
          console.error(error)
        }
      } else if (dir === 1) {
        try {
          await axios.put(uri+"/"+id+"/moveup")
        } catch (error) {
          console.error(error)
        }
      }
      getAllTodos()
    } else {
      return
    }
  }

  async function setStatus(id, stat) {
    const newTodo = await todos.find(todo => todo.id === id)
    try {
      await axios.put(uri+"/"+id, {
        id: newTodo.id,
        position: newTodo.position,
        title: newTodo.title,
        description: newTodo.description,
        duedate: newTodo.duedate,
        status: stat
      })
    } catch (error) {
      console.error(error)
    }
    getAllTodos()
  }

  function setFilteredStatus(status) {
    setFiltStatus(status)
  }

  function getAllTodos() {
    try {
      await axios.get(uri).then(result => setTodos(result.data))
      console.log(todos)
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