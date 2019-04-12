import { Provider } from 'react-redux';
import React from 'react';
import reduxPromise from 'redux-promise';
import async from './Middlewares/async.js';
import statevalidator from './Middlewares/statevalidator';
import { createStore,applyMiddleware } from 'redux';
import Reducers from './reducers';


export default ({children,initialstate= {}}) => {
  const store =createStore(Reducers, initialstate, applyMiddleware(async , statevalidator));
  return(

<Provider store= {store}>
{children}
</Provider>
)}
