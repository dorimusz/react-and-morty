import React from 'react';
import { shallow } from 'enzyme';
import App from './app.js'

let wrapper;

describe('All elements are on the main screen', () => {

    test('Test if image found on the main screen', () => {
        wrapper = shallow((<App />))
        expect(wrapper.find('img').prop('src')).toBeTruthy();
    })

    test('Test if div found on the main screen', () => {
      wrapper = shallow((<App />))
      expect(wrapper.find('div')).toBeTruthy();
    })

    test('Test if 2 buttons found on the main screen', () => {
      wrapper = shallow((<App />))
      expect(wrapper.find('button').length).toEqual(2);
    })


});