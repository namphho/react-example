import {combineReducers} from "redux";
import testReducer from "../feature/testarea/testReducer";
import {reducer as FormReducer} from "redux-form";
import {firebaseReducer} from "react-redux-firebase";
import RegReducer from "../feature/home/RegReducer";

const rootReducer = combineReducers({
    test: testReducer,
    form: FormReducer,
    firebase: firebaseReducer,
    register: RegReducer
})

export default rootReducer;