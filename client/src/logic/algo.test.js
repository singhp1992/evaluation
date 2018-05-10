// import React from 'react'
// import { shallow } from 'enzyme'

// const getColor = require('./algo')
// const randomizer = require('./algo')


// test('Gets a random color', () => {
//     expect(getColor.Math.random()).toBe(red);
// })
test("Red should be defined", function () {
    const red = 
        {
            chance: 0.53
        }
    ;

    expect(red.chance).toBeDefined();
});

test("Yellow should be defined", function () {
    const yellow =
        {
            chance: 0.28
        }
        ;

    expect(yellow.chance).toBeDefined();
});

test("Green should be defined", function () {
    const green =
        {
            chance: 0.19
        }
        ;

    expect(green.chance).toBeDefined();
});



//CHECK FOR TRUTHY AND FALSEY VALUES
//toBeNull matches only null
//toBeUndefined matches only undefined
//toBeDefined is the opposite of toBeUndefined
//toBeTruthy matches anything that an if statement treats as true
//toBeFalsy matches anything that an if statement treats as false


// import React from 'react'
// import { shallow } from 'enzyme'
// import App from './App'

// describe('<App />', () => {
//     const app = shallow(<App />)

//     it('wraps everything in a div tag', () => {
//         expect(app).toHaveTagName('div')
//         expect(app).toHaveClassName('App')
//     })

//     it('contains a title', () => {
//         expect(app.find('h1.title')).toHaveText('0hh1')
//     })
// })