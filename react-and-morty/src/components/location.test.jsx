import React from 'react';
import { shallow } from 'enzyme';
import Location from './location.jsx'

let wrapper;

describe('Test click event', () => {

    test('Test if click happens on image, a div with card-desc-show class appears on the screen', () => {
        wrapper = shallow((<Location  
            name="name"
            type="type"
            dimension="dimension"
            key="key"
             />))
        
        wrapper.find('.location_bg').simulate('click');
        expect(wrapper.find('.card-desc-show').length).toEqual(1);
    })

    test('Test if click happens on image, a div with card-desc class does not appear on the screen', () => {
        wrapper = shallow((<Location  
            name="name"
            type="type"
            dimension="dimension"
            key="key"
             />))
        
        wrapper.find('.location_bg').simulate('click');
        expect(wrapper.find('.card-desc').length).toEqual(0);
        
    })
  });
