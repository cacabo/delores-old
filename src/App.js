import React, { Component } from 'react';

import Map from './components/map/Map';
import Sidebar from './components/sidebar/Sidebar';
import Nav from './components/sidebar/Nav';

import './assets/scss/index.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({
      active: !this.state.active,
    });
  }

  render() {
    return (
      <div id="app">
        <Nav active={this.state.active} handleToggle={this.handleToggle} />
        <Sidebar active={this.state.active} />
        <Map
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100vh`, flex: 1 }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default App;
