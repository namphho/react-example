import {combineReducers} from "redux";
import testReducer from "../feature/testarea/testReducer";
import {reducer as FormReducer} from "redux-form";

const rootReducer = combineReducers({
    test: testReducer,
    form: FormReducer
})

export default rootReducer;