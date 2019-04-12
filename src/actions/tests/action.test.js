import {SAVE_COMMENT} from '../types';
import {saveComment} from '../index.js';

it('save comment action is dispatched',() => {
  const comment = 'dhvcjhdsvchsdc';
  const action = saveComment(comment);

  expect(action).toEqual({type:SAVE_COMMENT,payload: comment});
})
