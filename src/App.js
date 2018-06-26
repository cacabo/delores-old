import React, { Component } from 'react';
import Map from './components/map/Map';
import Sidebar from './components/sidebar/Sidebar';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Sidebar />
        <Map />
      </div>
    );
  }
}

export default App;
