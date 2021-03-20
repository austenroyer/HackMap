import logo from './logo.svg';
import './App.css';
import Map from './Map'

function App() {
  return (
    <div className="App-header" >
      <Map style={{maxWidth: '50%', width: '50%', height: '75%', maxHeight:'75%'}}/>
    </div>
  );
}

export default App;
