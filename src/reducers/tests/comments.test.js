import CommentsReducer from '../comments';
import { SAVE_COMMENT } from '../../actions/types';

it('handles ations of type Save_comment',() =>{
  const action ={
    type:SAVE_COMMENT,
    payload:'comment'
  }

  const newstate = CommentsReducer([], action);

  expect(newstate).toEqual(['comment'])
});

it('handle action of unknown type',() => {
  const newstate = CommentsReducer([],{type:'klncld'});

  expect(newstate).toEqual([])
})
