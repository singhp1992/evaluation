export default function studentRandomizer(students, event) {

    const number = Math.floor(Math.random() * 100)
    const red = students.filter(object => object.lastEvaluation === 'red')
    const yellow = students.filter(object => object.lastEvaluation === 'yellow')
    const green = students.filter(object => object.lastEvaluation === 'green')
    const redEqualsYellow = (2 * red.length)
    const redEqualsGreen = (3 * red.length)
    let color

    if (red.length <= 2) {
        if (number <= 33) color = 'red'
        if (number > 33 && number <= 66) color = 'yellow'
        if (number > 66) color = 'green'
    } else if (yellow.length <= 2) {
        if (number <= 33) color = 'red'
        if (number > 33 && number <= 66) color = 'yellow'
        if (number > 66) color = 'green'
    } else if (redEqualsYellow <= yellow.length) {
        if (number <= 40) color = 'red'
        if (number > 40 && number <= 80) color = 'yellow'
        if (number > 80) color = 'green'
    } else if (redEqualsGreen <= green.length) {
        if (number <= 40) color = 'red'
        if (number > 40 && number <= 60) color = 'yellow'
        if (number > 60) color = 'green'
    } else {
        if (number <= 53) color = 'red'
        if (number > 53 && number <= 81) color = 'yellow'
        if (number > 81) color = 'green'
    }


console.log(color)
console.log(number)


const colorMatcher = students.filter(object => object.lastEvaluation === color)
const randomStudent = colorMatcher[Math.floor(Math.random() * colorMatcher.length)]

if (randomStudent !== undefined) {
    return alert('Ask ' + randomStudent.firstName + ' ' + randomStudent.lastName + ' a question. They have a ' + randomStudent.lastEvaluation + ' evaluation')
} else {
    return alert(`Try adding more students & evaluations for better results`)

}
}
