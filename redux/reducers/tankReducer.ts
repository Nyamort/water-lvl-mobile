import {FETCH_TANKS} from "../../constantes";
import {Tank} from "../../models/Tank";
const initialState = {
    tanks: [] as Tank[],
}

export default  function tankReducer (state = initialState, action) {
    switch (action.type) {
        case FETCH_TANKS:
            return {...state, tanks: action.payload};
        default:
            return state;
    }
}