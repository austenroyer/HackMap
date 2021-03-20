import logo from './logo.svg';
import './App.css';
import Map from './Map'
const styles = {
  flexbox:
    {
      display: 'grid',
      direction: 'row',
      gridColumnGap: '1vw',
      gridRowGap: '1vh',
      height:'100%'

    },
    item1: {
      gridColumnStart: 1,
      gridColumnEnd: 29,
      gridRowStart: 10,
      gridRowEnd: 90,
      border: '1px solid',
      borderRadius: '25%',
    },
    item2: {
      gridColumnStart: 30,
      gridColumnEnd: 95,
      gridRowStart: 1,
      gridRowEnd: 90,
          }
}
function App() {
  return (
    <div>
      <p className={"App-header"}> Police Butt Map</p>
    <div style={styles.flexbox} >
      <div style = {styles.item1}>
        <p> First Item!</p>
      </div>
      <div style={styles.item2}>
        <Map />
      </div>
    </div>
    </div>
  );
}

export default App;
