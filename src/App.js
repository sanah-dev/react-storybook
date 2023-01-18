import './App.css';
import {Input} from './components/Input';
import {List} from './components/List';
// import {DataList} from './components/DataList';
import {AddressList} from './components/AddressList';
import {Select} from './components/Select';

function App() {
  return (
    <div className="App">
      {/* <DataList /> */}
      {/* 
      <Input
        label="테스트"
        type="checkbox"
        required={true}
        state="error"
        borderColor="red"
      />
      <List />

    */}
      <AddressList
        label="가상자산 주소 추가"
        listHeaderCol1="가상자산"
        listHeaderCol2="주소"
        assetPlaceholder="예시: BTC"
        addressPlaceholder="예시: 3Kj7ygvnKvUEmengY1Y3H5hQqTDtX9sa23"
      />
      <Select selected="banana" />
    </div>
  );
}

export default App;
