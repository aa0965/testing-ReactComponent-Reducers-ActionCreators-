import React from 'react';
import { mount } from 'enzyme';
import App from '../app.js';
import CommentBox from '../CommentBox.js';
import Root from '../../root';
let wrapped;
beforeEach(()=>{
  wrapped = mount(<Root><CommentBox /></Root>);

});

afterEach(()=>{
wrapped.unmount();                       //just unmount the component from JSDOM
})

it('shows a text area and 2 buttons',()=>{
expect(wrapped.find('textarea').length).toEqual(1);
expect(wrapped.find('button').length).toEqual(2);
})

it('user can enter textarea',() => {
  wrapped.find('textarea').simulate('change' , {
    target: {value: 'new comment'}
  });
  wrapped.update();

  expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
});

it('text area gets cleared after text input',() => {
  wrapped.find('textarea').simulate('change' , {
    target: {value: 'new comment'}
  });
wrapped.update();

wrapped.find('.save').simulate('click');
wrapped.update();
// expect(wrapped.find('textarea').prop('value')).toEqual('')

});
