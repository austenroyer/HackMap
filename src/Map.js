import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';
 
export class MapContainer extends Component{
  render() {
    return (
      <Map containerStyle={{position: 'absolute', width: '65vw', height: '85vh'}} style = {this.props.style} google={this.props.google} zoom={10} initialCenter={{lat: 41.82, lng: -71.41}} 
      >
 
       <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
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