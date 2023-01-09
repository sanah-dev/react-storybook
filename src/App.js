import logo from './logo.svg';
import './App.css';
import {Button} from './components/Button';
import {Input} from './components/Input';

function App() {
  return (
    <div className="App">
      <Button label="야호" primary size="large"></Button>
      <Input label="테스트" required={true} state="error" borderColor="red" />
    </div>
  );
}

export default App;
