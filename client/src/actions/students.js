import * as request from 'superagent'

const baseUrl = 'http://localhost:4000'

export const GET_STUDENTS = 'GET_STUDENTS'
export const GET_STUDENT = 'GET_STUDENT'
export const ADD_STUDENT = 'ADD_STUDENT'
export const DELETE_STUDENT = 'DELETE_STUDENT'

export const getStudents = () => (dispatch, getState) => {
    //const state = getState()
    console.log('action')
    request
        .get(`${baseUrl}/students`)
        .then(result => {
            dispatch({
                type: GET_STUDENTS,
                payload: result.body
            })
        })
        .catch(err => console.error(err))
}

export const getStudentsByBatchNumber = () => (dispatch, getState) => {
    //const state = getState()
    console.log('students by batchNumber')
    request
        .get(`${baseUrl}/students`)
        .then(result => {
            dispatch({
                type: GET_STUDENTS,
                payload: result.body
            })
        })
        .catch(err => console.error(err))
}

const newStudent = student => ({
    type: ADD_STUDENT,
    payload: student
})

export const addStudent = (student) => (dispatch) => {
    console.log(student)

    request
        .post(`${baseUrl}/students/`)
        .send(student)
        .then(result => dispatch(newStudent(student)))
        .catch(err => console.error(err))
}

const getStudentById = studentId => ({
    type: GET_STUDENT,
    payload: studentId
})

export const getStudent = (studentId) => (dispatch) => {
    console.log(studentId + 8888)
    request
        .get(`${baseUrl}/students/${studentId}`)
        .then(response => dispatch(getStudentById(response.body)))
        .catch(err => console.error(err))
}

export const deleteStudent = (id) => (dispatch) => {
    request
        .delete(`${baseUrl}/students/${id}`)
        .then(result => {
            dispatch({
                type: DELETE_STUDENT,
                payload: result.body
            })
        })
        .catch(err => console.error(err))
}
