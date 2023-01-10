import './App.css';
import {Input} from './components/Input';
import {List} from './components/List';
import {DataList} from './components/DataList';

function App() {
  return (
    <div className="App">
      <Input
        label="테스트"
        type="checkbox"
        required={true}
        state="error"
        borderColor="red"
      />
      <List></List>
      <DataList />
    </div>
  );
}

export default App;
