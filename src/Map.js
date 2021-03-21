import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';
//41.825226, and the longitude is -71.418884. 

export class MapContainer extends Component{
  render() {
    // let markers = this.props.markers.map(
    //   (m) => <Marker draggable={this.props.draggable} 
    //   title={m.incident} name={m.location} />
    // );
    // console.log(markers);
    let drag = this.props.draggable;
    let length = this.props.markers.length;
    const pos =this.props.pos;
    // const setLng = this.props.lng;
    // console.log(this.props.markers);
    return (
      <Map containerStyle={{position: 'absolute', width: '60vw', height: '80vh'}} style = {this.props.style} google={this.props.google} zoom={10} initialCenter={{lat: 41.82, lng: -71.41}} 
      >
<<<<<<< Updated upstream
 
       <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
=======
        
          {this.props.markers.map(function(item, idx){
            return(<Marker draggable={idx == length-1 ? drag : false} 
              title={item.incident} name={item.location} position={{lng: item.lng, lat: item.lat}}
              onDragend={( map, coord) => {//let coord = e.nativeEvent.coordinate;
                                //  console.log( map, coord);
                                // const latLng = {coord};
                                // console.log(coord.position.lat());
                                // console.log(coord.position.lng());
                                // setLng(coord.position.lat());
                                // setLat(coord.position.lng())
                                pos(coord.position.lat(),coord.position.lng());
                                }} />)
          }) }
          
        
      
>>>>>>> Stashed changes
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>HIII</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyACIqLOutzdazZcxxa0pyUffXSZLqQpyPo")
})(MapContainer)