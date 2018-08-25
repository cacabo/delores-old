import React from 'react';
import PropTypes from 'prop-types';

const Radios = ({
  label,
  options,
  inline,
}) => (
  <div>
    <label>
      { label }
    </label>
    {
      options.map(option => (
        <div className={inline ? 'form-check form-check-inline' : 'form-check'} key={`radios-select-${option}`}>
          <label>
            <input className="form-check-input" name="radius" type="radio" value={option} />
            {option}
          </label>
        </div>
      ))
    }
  </div>
);

Radios.defaultProps = {
  label: '',
  inline: false,
};

Radios.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array.isRequired,
  inline: PropTypes.bool,
};

export default Radios;
