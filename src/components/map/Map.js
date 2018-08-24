/* global google */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Map extends Component {
  constructor(props) {
    super(props);

    this.initMap = this.initMap.bind(this);
    this.waitForGoogle = this.waitForGoogle.bind(this);
    this.setMarker = this.setMarker.bind(this);
  }

  componentDidMount() {
    this.waitForGoogle();
  }

  componentDidUpdate(prevProps) {
    // If the map location has changed
    if (prevProps.location && this.props.location && (
      prevProps.location.lat !== this.props.location.lat || prevProps.location.lng !== this.props.location.lng
    )) {
      if (this.state.map) {
        this.setMarker();
        this.state.map.panTo(this.props.location);
      }
    }
  }

  setMarker() {
    const existingMarker = this.state.marker;

    // Remove an existing marker if there is one
    if (existingMarker) {
      existingMarker.setMap(null);
    }

    const newMarker = new google.maps.Marker({
      position: this.props.location,
      map: this.state.map,
    });

    this.setState({
      marker: newMarker,
    });
  }

  waitForGoogle() {
    if (typeof google !== 'undefined') {
      this.initMap();
    } else {
      // Check again if google is defined
      setTimeout(this.waitForGoogle, 125);
    }
  }

  initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: this.props.location,
      zoom: 8,
    });

    this.setState({ map });

    this.setMarker();
  }

  render() {
    return (
      <div id="map"></div>
    );
  }
}

function mapStateToProps(state) {
  return {
    location: state.location,
  };
}

Map.propTypes = {
  location: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    name: PropTypes.string,
  }).isRequired,
};

export default connect(
  mapStateToProps
)(Map);
