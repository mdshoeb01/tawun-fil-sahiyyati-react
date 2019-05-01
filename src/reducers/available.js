import { GETAVAILABLE } from '../actions/available/main'

export const available = (state = [], action) => {
    switch(action.type) {
        case GETAVAILABLE:
            return Object.assign([], state, action.payload);
        default: return state;
    }
}