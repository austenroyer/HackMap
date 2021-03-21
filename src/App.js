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
      gridRowStart: 5,
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
    },
    input: {
      padding: '3vh'
    },
}
//41.825226, and the longitude is -71.418884. 
var markers = [
  {
    lat: 41.8,
    lng: -71.4,
    location: 'Dennis Street',
    incident: 'Officer Berated Me',
    description: 'A police officer verbally berated me at a crosswalk for simply two-stepping in the middle of the road'

  },
  {
    lat: 41.85,
    lng: -71.5,
    location: 'Johnnys Deli',
    incident: 'Aggressive officer',
    description: 'A police officer came up to me in the middle of the Deli while I was getting some food and accused me of stealing, then patted me down even though I had taken nothing'
  }
];
let selected = 0;
const updatePosition = (lat, lng) => markers[markers.length-1] = {...markers[markers.length-1], lng: lng, lat: lat};
function App() {
  const [location, setLocation] = React.useState('');
  const [Incident, setIncident] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [dragging, setDragging] = React.useState(false);
  const [display, setDisplay] = React.useState(true);
  const trueUpdate = (sel) => {
    if ((selected == sel)&&(!display)){
      setDisplay(true);
    }
    else if (display){
      selected = sel;
      setDisplay(false);
    }

  };
  // const [lat, setLat] = React.useState(41.6);
  // const [lng, setLng] = React.useState(-71.5)
  const handleSubmit = () => {
    //make 
    setDragging(true);
    markers.push({lat: 41.6, lng: -71.5, location: location, incident: Incident, description: description});
    setLocation('');
    setIncident('');
    setDescription('');
  };
  return (
    <div style = {{height: '100%', backgroundColor: '#dddddd'}}>
      <p className={"App-header"}> The rightsMap</p>
    <div style={styles.flexbox} >
      <div style = {styles.item1}>

        <p style = {{height: '25%', padding: '10px'}}> The rightsMap tool lets you see where other people in your area have reported abuse or harassment by police officers, we hope that this tool will help visualize the pervasiveness of Police Misconduct within our communities</p>
        {/* <div styles={styles.bottomHalf}> */}
        {display ?
        dragging ?
        <div>
        <p style = {styles.input}>Drag the marker to approximately where the incident happened, then click OK when done</p>
        <button onClick={()=>setDragging(false)}>OK</button>
        </div>
        :
          <div >
        <div style={styles.input}>
        <label style={styles.input}>Location</label>
        <input
         
          type="loc"
          name="loc"
          placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
        />
      </div> 
      <div style={styles.input}>
        <label style={styles.input}>Incident</label>
        <input
          type="incident"
          name="incident"
          placeholder="Incident"
          onChange={(e) => setIncident(e.target.value)}
          value={Incident}
        />
      </div>
      <div style={styles.input}>
        <label style={styles.input}>Description</label>
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
    :
    <div>
      <p style={styles.input}>{markers[selected].location}</p>
      <p style={styles.input}>{markers[selected].incident}</p>
      <p style={styles.input}>{markers[selected].description}</p>
    </div>}
        {/* </div> */}
      </div>
      <div style={styles.item2}>
        <Map markers={markers} draggable={dragging} style = {{      border: '5px solid #0099ff',
      borderRadius: '1%',}} update={trueUpdate} pos={updatePosition}/>
      </div>
    </div>
    </div>
  );
}

export default App;
