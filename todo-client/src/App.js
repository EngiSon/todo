import './App.css';
import InputRow from './components/InputRow';
import TodoCard from './components/TodoCard';
import ToggleButtons from './components/ToggleButtons';

function App() {
  return (
    <body className='container'>
      <h2 id='centered'>Todo app</h2>
      <div id='centered'>
        <InputRow/>
      </div>
      <div id='centered-topmargin'>
        <ToggleButtons/>
      </div>
    </body>
  );
}

export default App;
