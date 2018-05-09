import * as request from 'superagent'
//import {isExpired} from '../jwt'
//import { logout } from './users'

const baseUrl = 'http://localhost:4000'

export const GET_BATCHES = 'GET_BATCHES'
export const GET_BATCH = 'GET_BATCHES'
export const ADD_BATCH = 'ADD_BATCH'

export const GET_STUDENTS = 'GET_STUDENTS'
export const GET_STUDENT = 'GET_STUDENT'
export const ADD_STUDENT = 'ADD_STUDENT'
export const DELETE_STUDENT = 'DELETE_STUDENT'


const fetchBatches = batches => ({
    type: GET_BATCHES,
    payload: batches
})


export const getBatches = () => (dispatch, getState) => {
    const state = getState()
    request
        .get(`${baseUrl}/batches`)
        .then(result => dispatch(fetchBatches(result.body)))
        .catch(err => console.error(err))
}

export const getBatch = (id) => (dispatch) => {
    request
        .get(`${baseUrl}/batches/${id}`)
        .then(result => {
            dispatch({
                type: GET_BATCH,
                payload: result.body
            })
        })
        .catch(err => console.error(err))
}

const newBatch = batch => ({
    type: ADD_BATCH,
    payload: batch
})

export const addBatch = (batch) => (dispatch, getState) => {
    const state = getState()

    request
        .post(`${baseUrl}/batches/`)
        .send(batch)
        .then(result => dispatch(newBatch(batch)))
        .catch(err => console.error(err))
}

const fetchStudents = students => ({
    type: GET_STUDENTS,
    payload: students
})

export const getStudents = (batchNumber) => (dispatch, getState) => {
    const state = getState()
    console.log('action')
    request
        .get(`${baseUrl}/batches/${batchNumber}`)
        .then(result => dispatch(fetchStudents(result.body.students)))
        .catch(err => console.error(err))
}


const newStudent = student => ({
    type: ADD_STUDENT,
    payload: student
})

export const addStudent = (student) => (dispatch) => {
    console.log(student)
    //const state = getState()
    //add getState to dispatch if needed
    //should be posted to the specific batch page? 
    request
        .post(`${baseUrl}/students/`)
        .send(student)
        .then(result => dispatch(newStudent(student)))
        .catch(err => console.error(err))
}


export const getStudent = (userId) => (dispatch) => {
    
    request
        .get(`${baseUrl}/students/${userId}`)
        .then(result => {
            dispatch({
                type: GET_STUDENT,
                payload: result.body
            })
        })
        .catch(err => console.error(err))
}

export const deleteStudent = (userId) => (dispatch) => {
    request
        .delete(`${baseUrl}/students/${userId}`)
        .then(result => {
            dispatch({
                type: DELETE_STUDENT,
                payload: result.body
            })
        })
        .catch(err => console.error(err))
}