import './App.css';
import Header from './Header';
import Speedometer from './Speedometer';
import Table from './Table';
import Balance from './Balance';

function App() {
  return (
    <>
      <div id='desktop'>
        <h1>Please switch to mobile</h1>
      </div>
      <div id='mobile'>
        <Header />
        <Speedometer />
        <Balance />
        <Table />
      </div>
    </>
  );
}

export default App;
