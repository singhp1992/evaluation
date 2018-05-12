import * as request from 'superagent'

const baseUrl = 'http://localhost:4000'

export const GET_BATCHES = 'GET_BATCHES'
export const GET_BATCH = 'GET_BATCHES'
export const ADD_BATCH = 'ADD_BATCH'
export const ASK_QUESTION = 'ASK_QUESTION'

const fetchBatches = batches => ({
    type: GET_BATCHES,
    payload: batches
})


export const getBatches = () => (dispatch, getState) => {
    //const state = getState()
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
    //const state = getState()
    request
        .post(`${baseUrl}/batches/`)
        .send(batch)
        .then(result => dispatch(newBatch(batch)))
        .catch(err => console.error(err))
}

