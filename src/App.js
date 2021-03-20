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
      gridColumnStart: 20,
      gridColumnEnd: 30,
      gridRowStart: 40,
      gridRowEnd: 60,
    },
    item2: {
      gridColumnStart: 40,
      gridColumnEnd: 95,
      gridRowStart: 12,
      gridRowEnd: 87,
          }
}
function App() {
  return (
    <div style={styles.flexbox} >
      <div style = {styles.item1}>
        <p> First Item!</p>
      </div>
      <div style={styles.item2}>
        <Map style={{maxWidth: '50%', width: '50%', height: '75%', maxHeight:'75%'}}/>
      </div>
    </div>
  );
}

export default App;
