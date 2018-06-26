import React, { Component } from 'react';
import Map from './components/map/Map';
import Sidebar from './components/sidebar/Sidebar';
import './assets/scss/index.scss';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Sidebar />
        <Map />
      </div>
    );
  }
}

export default App;
