import React from 'react';

export default ({
  label,
  value,
  name,
  type,
  placeholder,
  handleChange
}) => (
  <div className="form-group">
    <label>
      { label }
    </label>
    <input
      className="form-control"
      value={value}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={handleChange} />
  </div>
);
