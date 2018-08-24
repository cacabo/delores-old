/* global google */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Map extends Component {
  componentDidMount() {
    const { lat, lng } = this.props;
    const position = { lat, lng };

    let map;

    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: position,
        zoom: 8,
      });

      new google.maps.Marker({
        position,
        map,
      });
    }

    function waitForGoogle() {
      if (typeof google !== 'undefined') {
        initMap();
      } else {
        // Check again if google is defined
        setTimeout(waitForGoogle, 125);
      }
    }

    waitForGoogle();
  }

  render() {
    return (
      <div id="map"></div>
    );
  }
}

Map.defaultProps = {
  lat: -34.397,
  lng: 150.644,
};

Map.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
};

export default Map;
