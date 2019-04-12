import * as actions from '../actions';

export default ({dispatch}) => next => action => {
                 //next for next middleware
    if(!action.payload || !action.payload.then){
      return next(action);
    }
    action.payload.then(function(response){
      const newaction = {...action,payload: response};
      dispatch(newaction);
    })                                                               //action as action for type and creator
                                                                     //necessary boiler plate for redux middleware decided by auther
  }                                                                  //dispatch starts the process takes action and passes to middlewares
