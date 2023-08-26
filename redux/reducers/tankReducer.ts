import {TANK_LOAD} from "../../constantes";
const initialState = {
    tanks: [],
}

export default  function tankReducer (state = initialState, action) {
    switch (action.type) {
        case TANK_LOAD:
            state.tanks.push(action.payload)
            return {...state};
        default:
            return state;
    }
}