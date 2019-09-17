import { createReducer } from "../../app/utils/reducerUtils";
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./testActions";

//data khoi tao ban dau

const initialData = {
    data: 1
}

const increment = (state) => {
    return {...state, data: state.data + 1};
}

const decrement = (state) => {
    return {...state, data: state.data - 1};
}


export default createReducer(initialData, {
    [INCREMENT_COUNTER] : increment,
    [DECREMENT_COUNTER] : decrement
});