import {combineReducers} from "redux";
import testReducer from "../feature/testarea/testReducer";
import {reducer as FormReducer} from "redux-form";
import {firebaseReducer} from "react-redux-firebase";
import RegReducer from "../feature/home/RegReducer";
import {reducer as toastrReducer} from 'react-redux-toastr'
import modalReducer from "../feature/modal/modalReducer";

const rootReducer = combineReducers({
    test: testReducer,
    form: FormReducer,
    firebase: firebaseReducer,
    register: RegReducer,
    toastr: toastrReducer,
    modals: modalReducer
})

export default rootReducer;