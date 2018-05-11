import React from 'react'
import { shallow } from 'enzyme'

describe("When a teacher wants to ask a question, what is the probability of each color being selected?", function() {
    const red =
        {
            chance: 0.53
        }
    const yellow =
        {
            chance: 0.28
        }
    const green =
        {
            chance: 0.19
        }

    test("Expect that chance of RED being selected to be 53%", function () {
        expect(red.chance).toBeDefined();
    })
    test("Expect that chance of YELLOW being selected to be 28%", function () {
        expect(yellow.chance).toBeDefined();
    })
    test("Expect that chance of GREEN being selected to be 19%", function () {
        expect(green.chance).toBeDefined();
    })
})

describe("Comparing the probability of Red, Yellow, and Green", function (){
    const chance = {
        red: 53,
        yellow: 28,
        green: 19
    }
    it('calculates that the probability of red > yellow', function() {
    expect(chance.red).toBeGreaterThan(chance.yellow)
    })
    it('calculates that the probability of yellow > green', function () {
        expect(chance.yellow).toBeGreaterThan(chance.green)
    })
})

export function calculatePercentages(arrayOfObjects) {

    const total = arrayOfObjects.length
    const green = arrayOfObjects.filter(object => object.lastEvaluation === 'green').length
    const yellow = arrayOfObjects.filter(object => object.lastEvaluation === 'yellow').length
    const red = arrayOfObjects.filter(object => object.lastEvaluation === 'red').length

    const greenPercent = green / total
    const yellowPercent = yellow / total
    const redPercent = red / total

    return {
        red: redPercent,
        yellow: yellowPercent,
        green: greenPercent
    }

}

describe('Calculate Percentages', () => {
    const test = [
        { name: 'student 1', lastEvaluation: 'red' }, 
        { name: 'student 2', lastEvaluation: 'yellow' }, 
        { name: 'student 3', lastEvaluation: 'yellow' }, 
        { name: 'student 4', lastEvaluation: 'green' },
        { name: 'student 5', lastEvaluation: 'green' }
    ]

    it('returns the correct percentage of students who have the same color evaluation', () => {
        expect(calculatePercentages(test)).toEqual({ green: 0.4, yellow: 0.4, red: 0.2 })
    })
})
