import "./styles/global.scss";
import React from 'react';
import { render } from 'react-snapshot';
import './fontawesome';
import App from './App';


render(
    <App />, 
    document.getElementById('main-content')
);
