import './App.css';
import { TodoWrapper } from './components/TodoWrapper';
import { createRequire } from 'module';

var require = createRequire(import.meta.url);
var module = { exports: {} };

function App() {
  return (
    <div className="App">
      <TodoWrapper />
    </div>
  );
}

export default App;
