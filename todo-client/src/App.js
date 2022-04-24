import './App.css';
import InputRow from './components/InputRow';
import TodoCard from './components/TodoCard';
import ToggleButtons from './components/ToggleButtons';

function App() {
  return (
    <div id='app-container'>
      <h2 id='centered'>Todo app</h2>
      <div id='centered'>
        <InputRow id='input-row' addTodo={addTodo}/>
      </div>
      <div id='centered-topmargin'>
        <ToggleButtons/>
      </div>
    </div>
  );
}

class Todo {
  constructor(name, description, dueDate, status) {
    this.name = name;
    this.desc = description;
    this.dueDate = dueDate;
    this.status = status;
  }
}

const todos = [];

function addTodo(name, desc, date) {
  todos.push(new Todo(name, desc, date, 'prog'));
}

export default App;
