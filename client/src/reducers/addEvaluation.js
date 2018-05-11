import { ADD_EVALUATION } from '../actions/evaluations'

export default function (state = [], { type, payload }) {
    switch (type) {
        case ADD_EVALUATION:
            return payload

        default:
            return state
    }
}