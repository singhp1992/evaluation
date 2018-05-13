import { ADD_STUDENT, GET_STUDENTS, DELETE_STUDENT } from '../actions/students'


export default (state = [], { type, payload }) => {
    switch (type) {
        case GET_STUDENTS:
            return payload

        case ADD_STUDENT:
            return [...state, payload]

        case DELETE_STUDENT:
            console.log('reducer removed')
            return state.filter(student => student.id !== payload.id)

        default:
            return state
    }
}