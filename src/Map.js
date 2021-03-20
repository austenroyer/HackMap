import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';
 
export class MapContainer extends Component{
  render() {
    var points = [
      { lat: 42.02, lng: -77.01 },
      { lat: 42.03, lng: -77.02 },
      { lat: 41.03, lng: -77.04 },
      { lat: 42.05, lng: -77.02 }
        ];
        var bounds = new this.props.google.maps.LatLngBounds();
        for (var i = 0; i < points.length; i++) {
          bounds.extend(points[i]);
        }
        
    return (
      <Map style = {this.props.style} google={this.props.google} zoom={3.7} initialCenter={{lat: 38.7, lng: -96.4}} 
      >
 
        {/* <Marker onClick={this.onMarkerClick}
                name={'Current location'} /> */}
 
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