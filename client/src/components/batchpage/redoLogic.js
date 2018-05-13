//import React, { PureComponent } from 'react'
//import { connect } from 'react-redux'
//import Button from 'material-ui/Button';
//import { getBatches, getBatch } from '../../actions/batches'

export default function studentRandomizer(arrayO, event) {

    const number = Math.floor(Math.random() * 100)
    const red = arrayO.filter(object => object.lastEvaluation === 'red')
    const yellow = arrayO.filter(object => object.lastEvaluation === 'yellow')
    console.log(red)

    let color 

    if (red.length <= 2) {
        if (number <= 33) color = 'red'
        if (number > 33 && number <= 66) color = 'yellow'
        if (number > 66) color = 'green'

    } else if (yellow.length <= 2) {
        if (number <= 33) color = 'red'
        if (number > 33 && number <= 66) color = 'yellow'
        if (number > 66) color = 'green'

    } else {
        if (number <= 53) color = 'red'
        if (number > 53 && number <= 81) color = 'yellow'
        if (number > 81) color = 'green'
    }

    console.log('THIS WILL BE BIG' + color)
    const colorMatcher = arrayO.filter(object => object.lastEvaluation === color)

    console.log(colorMatcher)

    const randomStudent = colorMatcher[Math.floor(Math.random() * colorMatcher.length)]

    console.log(randomStudent)
   
    if (randomStudent !== undefined) {
        return alert('Ask ' + randomStudent.firstName + ' ' + randomStudent.lastName + ' a question. They have a ' + randomStudent.lastEvaluation + ' evaluation')

    } else {
        return alert('no students with this evaluation exist..')

    }

}