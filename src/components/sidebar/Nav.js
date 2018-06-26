import React from 'react';

export default ({ active, handleToggle }) => (
  <div>
    <nav id="nav">
      <h4 className="title">
        Delores
      </h4>
      <div id="toggle" className={active ? 'active' : ''} onClick={handleToggle}>
        <span className="bar" id="first" />
        <span className="bar" id="second" />
        <span className="bar" id="third" />
      </div>
    </nav>
    <div id="shade" className={active ? 'active' : ''} onClick={handleToggle} />
  </div>
);
