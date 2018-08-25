import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { changeLocation } from '../../actions/locationActions';

import Input from '../forms/Input';
import InputLocation from '../forms/InputLocation';
import Select from '../forms/Select';
import Footer from './Footer';
import RadiusSelect from './RadiusSelect';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
      organ: '',
      age: '',
      status: '',
      prioroty: '',
      waitTime: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeInt = this.handleChangeInt.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.locationCallback = this.locationCallback.bind(this);
  }

  locationCallback(locationObj) {
    this.props.changeLocation(locationObj);

    this.setState({
      location: locationObj.name,
    });
  }

  handleChangeInt(event) {
    const strValue = event.target.value;

    if (strValue === '') {
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
  }

  handleToggle() {
    this.setState({
      active: !this.state.active,
    });
  }

  render() {
    const organOptions = [
      'Heart',
      'Lung',
      'Liver',
      'Kidney',
    ];

    const ageOptions = [
      'Adult',
      'Pediatric',
    ];

    const statusOptions = [
      '1A',
      '1B',
      '2A',
      '2B',
      'Inactive',
      'NA',
    ];

    const priorityOptions = [
      'Priority 1',
      'Priority 2',
      'NA',
    ];

    return (
      <div id="sidebar" className={this.props.active ? 'active' : ''}>
        <div className="container-fluid">
          <form onSubmit={this.handleSubmit}>
            <InputLocation
              name="location"
              label="Location"
              value={this.state.location}
              handleChange={this.handleChange}
              callback={this.locationCallback}
              placeholder="Search for a location"
              type="text"
            />

            <Select
              name="organ"
              value={this.state.organ}
              type="text"
              options={organOptions}
              handleChange={this.handleChange}
              label="Organ"
            />

            <Select
              name="age"
              value={this.state.age}
              type="text"
              options={ageOptions}
              handleChange={this.handleChange}
              label="Age"
            />

            <Select
              name="status"
              value={this.state.status}
              type="text"
              options={statusOptions}
              handleChange={this.handleChange}
              label="Status"
            />

            <Select
              name="prioroty"
              value={this.state.prioroty}
              type="text"
              options={priorityOptions}
              handleChange={this.handleChange}
              label="Priority"
            />

            <Input
              name="waitTime"
              label="Wait time"
              value={this.state.waitTime}
              handleChange={this.handleChangeInt}
              placeholder="Time in days"
              type="number"
            />

            <RadiusSelect />
          </form>

          <Footer />
        </div>
      </div>
    );
  }
};

const mapStateToProps = ({ sidebarState }) => {
  return sidebarState;
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLocation: (location) => dispatch(changeLocation(location)),
  };
};

Sidebar.propTypes = {
  changeLocation: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

// Redux config
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
