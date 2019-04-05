import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/';
import './commonStyles/index.css';

const root = '.porthole';

ReactDOM.render(<App root={root} />, document.querySelector(root));
