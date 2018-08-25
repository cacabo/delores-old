/* global google */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const MILES_TO_METERS = 1609.34;
const BLUE = '#3b78e7';

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: null,
      marker: null,
    };

    this.initMap = this.initMap.bind(this);
    this.waitForGoogle = this.waitForGoogle.bind(this);
    this.setMarker = this.setMarker.bind(this);
    this.locationChanged = this.locationChanged.bind(this);
    this.radiusChanged = this.radiusChanged.bind(this);
    this.drawRadius = this.drawRadius.bind(this);
  }

  componentDidMount() {
    this.waitForGoogle();
  }

  componentDidUpdate(prevProps) {
    if (!this.state.map) return;

    if (this.locationChanged(prevProps)) {
      this.setMarker();
      this.state.map.panTo(this.props.location);
    } else if (this.radiusChanged(prevProps)) {
      this.drawRadius();
    }
  }

  radiusChanged(prevProps) {
    if (!prevProps) return false;
    if (prevProps.radiusType !== this.props.radiusType) return true;
    if (prevProps.radius !== this.props.radius) return true;

    return false;
  }

  locationChanged(prevProps) {
    if (!prevProps || !this.props.location || !prevProps.location) return false;
    if (prevProps.location.lat !== this.props.location.lat) return true;
    if (prevProps.location.lng !== this.props.location.lng) return true;

    return false;
  }

  drawRadius() {
    const existingRadiusCircle = this.state.radiusCircle;

    if (existingRadiusCircle) {
      existingRadiusCircle.setMap(null);
    }

    if (this.props.radiusType === 'Local' && this.state.map) {
      const radiusCircle = new google.maps.Circle({
        strokeColor: BLUE,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: BLUE,
        fillOpacity: 0.1,
        map: this.state.map,
        center: this.props.location,
        radius: this.props.radius * MILES_TO_METERS,
      });

      this.setState({ radiusCircle });
    } else {
      this.setState({ radiusCircle: null });
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

    this.drawRadius();

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

    this.setState({ map }, () => {
      this.setMarker();
    });
  }

  render() {
    return (
      <div id="map"></div>
    );
  }
}

function mapStateToProps({ locationState, mapState }) {
  return {
    location: locationState,
    radius: mapState.radius,
    radiusType: mapState.radiusType,
  };
}

Map.propTypes = {
  location: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    name: PropTypes.string,
  }).isRequired,
  radius: PropTypes.number.isRequired,
  radiusType: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps
)(Map);
