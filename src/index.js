import React from 'react';
import { render } from 'react-snapshot';
import App from './App';
import "./styles/global.scss";

render(
    <App />, 
    document.getElementById('root')
);
