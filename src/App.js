import React, { Component } from 'react';

import Map from './components/map/Map';
import Sidebar from './components/sidebar/Sidebar';
import Nav from './components/sidebar/Nav';
import Shade from './components/sidebar/Shade';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Nav />
        <div className="nav-spacer" />
        <Shade />
        <div className="flex-container">
          <Sidebar />
          <Map />
        </div>
      </div>
    );
  }
}

export default App;
