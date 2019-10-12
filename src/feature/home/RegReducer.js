import { createReducer } from "../../app/utils/reducerUtils";
import { CREATE_OWNER, CREATE_EMPLOYEE, GET_OWNER_PROFILE } from "./RegConstants";

const initData = {
    isRegisterOwnerSuccess: false,
    isRegisterEmployeeSuccess: false,
    ownerProfiles : []
}

const createOwner = (state) =>{
    return { ...state, isRegisterOwnerSuccess: true, isRegisterEmployeeSuccess: false};
}

const createEmployee = (state) => {
    return {...state, isRegisterEmployeeSuccess: true, isRegisterOwnerSuccess: false}
}

const getOwnerProfiles = (state, payload) => {
    return {...state, ownerProfiles: payload.data}
}

export default createReducer(initData, {
    [CREATE_OWNER] : createOwner,
    [CREATE_EMPLOYEE]: createEmployee,    
    [GET_OWNER_PROFILE]: getOwnerProfiles,
});