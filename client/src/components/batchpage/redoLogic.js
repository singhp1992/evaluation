import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Button from 'material-ui/Button';

import { getBatches, getBatch } from '../../actions/batches'

export default function getRandomStudent(arrayOfObjects, event) {
    event.preventDefault()



    const number = Math.floor(Math.random() * 100)
    const red = arrayOfObjects.filter(object => object.currentColor === 'red')
    const yellow = arrayOfObjects.filter(object => object.currentColor === 'yellow')

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


    const students = arrayOfObjects.filter(object => object.currentColor === color)
    const randomStudent = students[Math.floor(Math.random() * students.length)]
    console.log('button!')
    console.log(randomStudent)
    if (randomStudent !== undefined) {
        return alert(randomStudent.fullName + ' has a ' + randomStudent.currentColor + ' evaluation!, Ask a question!!!!! :-) ')

    } else {
        return alert(' dude, no students with this evaluation exist....please click again ;-) ')

    }

}

