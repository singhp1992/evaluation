import * as request from 'superagent'

const baseUrl = 'http://localhost:4000'

export const ADD_EVALUATION = 'ADD_EVALUATION'
export const GET_EVALUATIONS= 'GET_EVALUATIONS'


const newEvaluation = evaluation => ({
    type: ADD_EVALUATION,
    payload: evaluation
})

export const addEvaluation = (id, evaluation) => (dispatch, getState) => {
    //const state = getState()
    request
        .post(`${baseUrl}/students/${id}`)
        .send(evaluation)
        .then(result => dispatch(newEvaluation(evaluation)))
        .catch(err => console.error(err))
        console.log('working working')
}

// export const addEvaluation = (id) => (dispatch) => {
//     console.log(student)
//     //const state = getState()
//     //add getState to dispatch if needed
//     //should be posted to the specific batch page? 
//     request
//         .post(`${baseUrl}/students/${id}`)
//         .send(id)
//         .then(result => dispatch(newEvaluation(id)))
//         .catch(err => console.error(err))
// }

export const getEvaluation = (id) => (dispatch) => {
    request
        .get(`${baseUrl}/evaluations/${id}`)
        .then(result => {
            dispatch({
                type: GET_EVALUATIONS,
                payload: result.body
            })
        })
        .catch(err => console.error(err))
}