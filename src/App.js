import logo from './logo.svg';
import './App.css';
import Map from './Map'
import React from 'react';
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
const handleSubmit = () => {console.log("submitted!")};
function App() {
  const [Incident, setIncident] = React.useState('');
  const [description, setDescription] = React.useState('');
  return (
    <div style = {{backgroundColor: '#dddddd'}}>
      <p className={"App-header"}> Police Butt Map</p>
    <div style={styles.flexbox} >
      <div style = {styles.item1}>
        <p style = {{height: '25%', border: '3px solid'}}> Hello there, here is a tutorial for how to use this tool peepeepoopoo</p>
        {/* <div styles={styles.bottomHalf}> */}
        <div >
      <div>
        <label>Incident</label>
        <input
          type="incident"
          name="incident"
          placeholder="Incident"
          onChange={(e) => setIncident(e.target.value)}
          value={Incident}
        />
      </div>
      <div>
        <label>Description</label>
        <input
          type="desc"
          name="desc"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </div>
      <button onClick={handleSubmit} >
        Submit
      </button>
    </div>
        {/* </div> */}
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
