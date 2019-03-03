import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/';
import './index.css';

const t1= new Date();
ReactDOM.render(<App />, document.getElementById('root'));
const t2= new Date();
console.log(t2 - t1);