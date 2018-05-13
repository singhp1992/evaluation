import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Button from 'material-ui/Button';
import { getBatches, getBatch } from '../../actions/batches'

export default function studentRandomizer(arrayO, event) {
    
    const number = Math.floor(Math.random() * 100)
    const red = arrayO.filter(object => object.lastEvaluation === 'red')
    const yellow = arrayO.filter(object => object.lastEvaluation === 'yellow')
    console.log(red)

    // function workBitch(red) {
    //     for(var i= 0; i < red.length; i++) {
    //         if(red[i].lastEvaluation === red) {
    //             return console.log(red.firstName + 'hehe')
    //         }
    //     }
    // }
    //     function getColor(random) {
    //         for (var i = 0; i < colors.length; i++) {
    //             var color = colors[i];
    //             if (random < color.chance) {
    //                 return color.color;
    //             }
    //             random -= color.chance;
    //         }
    //     }
    
    // function getNewArray() {
    //     var newArray = []
    //     for (var i = 0; i < red.length; i++) {
    //     let reed = red[i]
    //     if (red[i].lastEvaluation === "red") {
    //         console.log(reed.firstName +" "+ reed.lastName + reed.lastEvaluation)
    //     }
    // }
    // return newArray;
    // }

    // console.log(getNewArray())

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
    //add for loop here and then filter it to the color Matcher
    const colorMatcher = arrayO.filter(object => object.lastEvaluation === color)

    console.log(colorMatcher + 'this should be color Matcher')

    const randomStudent = colorMatcher[Math.floor(Math.random() * colorMatcher.length)]

    console.log('here is the ' + randomStudent)
   
    if (randomStudent !== undefined) {
        return alert(randomStudent.firstName + ' ' + randomStudent.lastName + ' has a ' + randomStudent.lastEvaluation + ' evaluation!, Ask a question!!!!! :-) ')

    } else {
        return alert('no students with this evaluation exist..')

    }

}
//tomorrow
//1. make the result of the for loop into an array
//2. add the loop after the color 
//OKAY SO LASTEVALUATION IS FILTERED OUT BEFORE THE FOR LOOP
//ITERATE THROUGH THE ARRAYOFOBJECTS THEN FILTER OUT THE ONES WITH RED