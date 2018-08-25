import React from 'react';

export default ({
  label,
  options,
}) => (
  <div>
    <label>
      { label }
    </label>
    {
      options.map(option => (
        <div className="form-check" key={`radios-select-${option}`}>
          <label>
            <input className="form-check-input" name="radius" type="radio" value={option} />
            {option}
          </label>
        </div>
      ))
    }
  </div>
);
