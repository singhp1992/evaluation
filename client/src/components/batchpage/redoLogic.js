import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Button from 'material-ui/Button';

import { getBatches, getBatch } from '../../actions/batches'

export default function studentRandomizer(arrayOfObjects, event) {
    event.preventDefault()

    const number = Math.floor(Math.random() * 100)
    const red = arrayOfObjects.filter(object => object.lastEvaluation === 'red')
    const yellow = arrayOfObjects.filter(object => object.lastEvaluation === 'yellow')
    console.log(red )

    let color

    if (red.length <= 2) {
        if (number <= 33) color = 'RED'
        if (number > 33 && number <= 66) color = 'YELLOW'
        if (number > 66) color = 'GREEN'

    } else if (yellow.length <= 2) {
        if (number <= 33) color = 'RED'
        if (number > 33 && number <= 66) color = 'YELLOW'
        if (number > 66) color = 'GREEN'

    } else {

        if (number <= 53) color = 'RED'
        if (number > 53 && number <= 81) color = 'YELLOW'
        if (number > 81) color = 'GREEN'
    }

    console.log('here comes the ' + color)
    //need to figure out why the colormatcher isn't showing up in the console.log!
    //everything else is working but it doesn't like the function for color matcher -  nothing is 
    //showing up in the console.log

    const colorMatcher = arrayOfObjects.filter(object => object.lastEvaluation === color)

    console.log(colorMatcher + 'this should be color Matcher')

    const randomStudent = colorMatcher[Math.floor(Math.random() * colorMatcher.length)]
   
    if (randomStudent !== undefined) {
        return alert(randomStudent.firstName + ' has a ' + randomStudent.lastEvaluation + ' evaluation!, Ask a question!!!!! :-) ')

    } else {
        return alert('no students with this evaluation exist..')

    }

}