import './App.css';
import Password from './components/password/password';
import PasswordsList from './components/password/passwordList';
import TodoList from './components/todo/todoList';

function App() {
  return (
    <div className="App">
      <Password />
      <PasswordsList />
      <TodoList/>
    </div>
  );
}

export default App;
