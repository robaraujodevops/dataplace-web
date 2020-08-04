import React from 'react';
import { render } from 'react-snapshot';
import './fontawesome';

import App from './App';
import "./styles/global.scss";

render(
    <App />, 
    document.getElementById('main-content')
);
