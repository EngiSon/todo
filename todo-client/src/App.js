import { Stack } from '@mui/material';
import { useState } from 'react';
import {nanoid} from 'nanoid';
import './App.css';
import InputRow from './components/InputRow';
import TodoCard from './components/TodoCard';
import ToggleButtons from './components/ToggleButtons';

class Todo {
  constructor(name, description, dueDate, status) {
    this.id = nanoid();
    this.name = name;
    this.desc = description;
    this.date = dueDate;
    this.status = status;
  }
}

function App() {
  const [todos, setTodos] = useState([]);
  
  const todosList = todos.map(todo => (
    <TodoCard
      id = {todo.id}
      key = {todo.id}
      name = {todo.name}
      desc = {todo.desc}
      date = {todo.date}
      deleteTodo = {deleteTodo}
    />
  ))

  function addTodo(name, desc, date) {
    const newTodo = new Todo(name, desc, date, 'prog');
    setTodos([...todos, newTodo])
  }

  function deleteTodo(id) {
    const newTodos = todos.filter(todo => id !== todo.id);
    setTodos(newTodos)
  }

  return (
    <div id='app-container'>
      <h2 id='centered'>Todo app</h2>
      <div id='centered'>
        <InputRow id='input-row' addTodo={addTodo}/>
      </div>
      <div id='centered-topmargin'>
        <ToggleButtons/>
      </div>
      <div id='centered'>
        <Stack>
          {todosList}
        </Stack>
      </div>
    </div>
  );
}

export default App;