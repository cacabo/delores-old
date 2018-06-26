import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  label,
  value,
  name,
  type,
  placeholder,
  handleChange,
}) => (
  <div className="form-group">
    {label && (
      <label>
        { label }
      </label>
    )}
    <input
      className="form-control"
      value={value}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={handleChange} />
  </div>
);

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.node.isRequired,
  name: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

export default Input;
