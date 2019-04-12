import React from 'react';
import { mount } from 'enzyme';
import Root from '../root.js';
import App from '../Components/app.js';
import moxios from'moxios';

beforeEach(()=>{
  moxios.install();
  moxios.stubRequest('https://jsonplaceholder.typicode.com/comments',{
    status:200,
    response: [{name:'feched1'},{name: 'fecthed2'}]
  })
})

afterEach(()=>{
  moxios.uninstall();
})

it('can  fetch list of comments',(done) => {
// render the entire app

const wrapped = mount(<Root><App/></Root>)

//simulate a clickon fetch button
wrapped.find('.fetch').simulate('click');


moxios.wait(()=>{
  wrapped.update();
  expect(wrapped.find('li').length).toEqual(1);

done();
wrapped.unmount()});
})
