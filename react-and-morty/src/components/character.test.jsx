import React from 'react';
import { shallow } from 'enzyme';
import Character from './character.jsx'

let wrapper;

describe('Test click events', () => {

    test('Test if click happens on image, a div with card-desc-show class appears on the screen', () => {
        wrapper = shallow((<Character  
            name="Rick"
            image="image"
            species="species"
            status="status"
            gender="gender"
            origin="origin name"
            type="item.type"
            key="item.name"
             />))
        
        wrapper.find('.charImg').simulate('click');
        expect(wrapper.find('.card-desc-show').length).toEqual(1);
    })

    test('Test if click happens on image, a div with card-desc class does not appear on the screen', () => {
        wrapper = shallow((<Character  
            name="Rick"
            image="image"
            species="species"
            status="status"
            gender="gender"
            origin="origin name"
            type="item.type"
            key="item.name"
             />))
        
        wrapper.find('.charImg').simulate('click');
        expect(wrapper.find('.card-desc').length).toEqual(0);
        
    })
});


