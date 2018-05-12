import { GET_STUDENT } from '../actions/students'
//, UPDATE_STUDENT

export default (state = {}, { type, payload }) => {
    switch (type) {
        case GET_STUDENT:
            return payload

        // case UPDATE_STUDENT:
        //     if (payload.id === state.id) {
        //         return payload
        //     }

            // else return state
        default:
            return state
    }
}