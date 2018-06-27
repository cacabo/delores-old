import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './assets/scss/index.scss';

console.log('node jawn');
console.log(process);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
