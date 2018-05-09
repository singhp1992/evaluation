//insert normal random function below

export const getRandomNumber = (max) => {
    return Math.round(Math.random() * max)
}

//insert logic percentages of randomness below
//if statements- if number is lower,equal or higher to the percentages?

const colorArray = (number) => {
    if (number <= 53) return ['RED']
    if (number > 53 && num <= 81) return ['YELLOW']
    if (number > 81) return ['GREEN']
}

//filter the students below, !==-1 for color!

//

export const getRandomStudent = (students) => {
    const number = getRandomNumber(100)
    const color = ColorArray(number)
    const filteredStudents = filterStudents(students, colorArray)

    if (!filteredStudents[0]) return getRandomStudentId(students)
    return filteredStudents[Math.floor(Math.random() * filteredStudents.length)].id
}

// const greenEvaluations = []
// const yellowEvaluations = []
// const redEvaluations = []

// const arrays = [greenEvaluations, yellowEvaluations, redEvaluations]

// const weight = [0.19, 0.28, 0.53]