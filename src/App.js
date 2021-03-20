import logo from './logo.svg';
import './App.css';
import Map from './Map'
const styles = {
  flexbox: {
      display: 'grid',
      direction: 'row',
      gridColumnGap: '1vw',
      gridRowGap: '1vh',
      height:'100%'
    },
    item1: {
      gridColumnStart: 2,
      gridColumnEnd: 31,
      gridRowStart: 10,
      gridRowEnd: 80,
      border: '5px solid',
      backgroundColor: '#ffff00',
      textAlign: 'center',
      display: 'grid',
      direction: 'column',
      gridColumnGap: '1vw',
      gridRowGap: '1vh',
      height:'100%'
      // borderRadius: '25%',
    },
    topHalf: {
      gridColumnStart: 2,
      gridColumnEnd: 31,
      gridRowStart: 10,
      gridRowEnd: 30,
      border: '5px solid',
      backgroundColor: '#0000ff',
    },
    bottomHalf: {
      gridColumnStart: 2,
      gridColumnEnd: 31,
      gridRowStart: 40,
      gridRowEnd: 60,
      border: '5px solid',
      backgroundColor: '#00ff00',
    },
    item2: {
      gridColumnStart: 33,
      gridColumnEnd: 95,
      gridRowStart: 1,
      gridRowEnd: 90,
    },
    title: {
        backgroundColor: '#282c34',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white',
        // marginTop: '3vh',
        // marginBottom:'3vh',
      }
}
function App() {
  return (
    <div style = {{backgroundColor: '#dddddd'}}>
      <p className={"App-header"}> Police Butt Map</p>
    <div style={styles.flexbox} >
      <div style = {styles.item1}>
        <p> Hello there, here is a tutorial for how to use this tool peepeepoopoo</p>
        <div styles={styles.bottomHalf}>
          <p> THere!</p>
        </div>
      </div>
      <div style={styles.item2}>
        <Map style = {{      border: '5px solid #0099ff',
      borderRadius: '1%',}}/>
      </div>
    </div>
    </div>
  );
}

export default App;
