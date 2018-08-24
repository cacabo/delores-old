import React, { Component } from 'react';

import Map from './components/map/Map';
import Sidebar from './components/sidebar/Sidebar';
import Nav from './components/sidebar/Nav';

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
        <Map />
      </div>
    );
  }
}

export default App;
