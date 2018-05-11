import * as request from 'superagent'

const baseUrl = 'http://localhost:4000'

export const ADD_EVALUATION = 'ADD_EVALUATION'
export const GET_EVALUATIONS= 'GET_EVALUATIONS'


const newEvaluation = evaluation => ({
    type: ADD_EVALUATION,
    payload: evaluation
})

export const addEvaluation = (evaluation) => (dispatch, getState) => {
    //const state = getState()
    console.log(evaluation)
    request
        .post(`${baseUrl}/evaluations`)
        .send(evaluation)
        .then(result => dispatch(newEvaluation(evaluation)))
        .catch(err => console.error(err))
}

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