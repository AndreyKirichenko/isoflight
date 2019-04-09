// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App/';
// import './commonStyles/index.css';


import myWorker from './test.worker';

// const root = '.porthole';

let counter = 0;
const worker = new myWorker();
worker.postMessage(counter);
worker.addEventListener('message', event => console.log({counter: event.data}));

//
// ReactDOM.render(<App root={root} />, document.querySelector(root));
