import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import ReactDOM from'react-dom';
import Root from './root';
import App from './Components/app';

ReactDOM.render(<Root><BrowserRouter><Route path='/' component={App} /></BrowserRouter></Root>,
   document.querySelector('#root'))
