import React from 'react';
import { mount } from 'enzyme';
import App from '../app.js';
import CommentList from '../CommentList.js';
import Root from '../../root';

let wrapped;
beforeEach(()=>{
  const initialstate = { comments : ['comment1','comment2']
}
  wrapped = mount(<Root initialstate={initialstate}><CommentList /></Root>);

});



it('text from each comment is visible', () => {
expect(wrapped.render().text()).toContain('comment1');
expect(wrapped.render().text()).toContain('comment2');

})
