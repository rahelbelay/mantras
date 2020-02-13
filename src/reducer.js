import {
    ADD_MANTRA,
} from "./action"
export function mantras(state = [], action) {
    let newState = [...state];
    switch (action.type) {
        case ADD_MANTRA:
            newState.push(action.payload.mantra)
            break;
        default:
            break;
    }

    return newState;
}


