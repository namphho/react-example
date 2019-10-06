import { createReducer } from "../../app/utils/reducerUtils";
import { CREATE_OWNER } from "./RegConstants";

const initData = {
    isRegisterOwnerSuccess: false,
    isRegisterEmployeeSuccess: false,
    ownerProfiles : []
}

const createOwner = (state) =>{
    return { ...state, isRegisterOwnerSuccess: true};
}

export default createReducer(initData, {
    [CREATE_OWNER] : createOwner,    
});