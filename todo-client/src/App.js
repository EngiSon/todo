import { Stack } from '@mui/material';
import { useState } from 'react';
import './App.css';
import InputRow from './components/InputRow';
import TodoCard from './components/TodoCard';
import ToggleButtons from './components/ToggleButtons';

class Todo {
  constructor(name, description, dueDate, status) {
    this.name = name;
    this.desc = description;
    this.dueDate = dueDate;
    this.status = status;
  }
}

function App() {
  const [todos, setTodos] = useState([]);
  
  const todosList = todos.map(todo => (
    <TodoCard
      name = {todo.name}
      desc = {todo.desc}
      date = {todo.date}
    />
  ))

  function addTodo(name, desc, date) {
    const newTodo = new Todo(name, desc, date, 'prog');
    setTodos([...todos, newTodo])
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