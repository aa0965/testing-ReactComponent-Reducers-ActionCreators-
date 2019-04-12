import tv4 from 'tv4';
import stateschema from './stateschema';

export default ({dispatch, getState}) => next => action => {
  next(action);
  // console.log(tv4.validate(getState(), stateschema));


}
