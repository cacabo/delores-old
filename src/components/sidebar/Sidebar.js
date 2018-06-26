import React, { Component } from 'react';
import Input from '../forms/Input';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      organ: '',
      age: '',
      status: '',
      prioroty: '',
      waitTime: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeInt = this.handleChangeInt.bind(this);
  }

  handleChangeInt(event) {
    const strValue = event.target.value;
    if (strValue === "") {
      this.handleChange(event);
    }

    const intValue = Number.parseInt(strValue, 10);
    if (!isNaN(intValue) && intValue >= 0) {
      this.handleChange(event);
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDeafult();
    console.log(this.state);
  }

  render() {
    return (
      <div id="sidebar">
        <div className="container-fluid">
          <h2>Delores</h2>
          <form onSubmit={this.handleSubmit}>
            <Input
              name="waitTime"
              label="Wait time"
              value={this.state.waitTime}
              handleChange={this.handleChangeInt}
              placeholder="Time in days"
              type="number"
            />
          </form>
        </div>
      </div>
    );
  }
};

export default Sidebar;
