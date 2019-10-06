import { KEY_EMAIL, KEY_ACTIVATED, KEY_DESCRIPTION, KEY_NAME, OWNER_KEY, EMPLOYEE_KEY, CREATE_OWNER } from "./RegConstants";


export const createOwner = (cred) => {
    return async (dispatch, getState, {getFirebase}) => {
        try {
            const firebaseApi = getFirebase();
            var result = await firebaseApi.createUser({
                email: cred.email,
                password: cred.password
            })
            console.log(result.user.uid);
            const path = generateOwnerPath(result.user.uid);
            const data = generateOwnerData(cred);
            await firebaseApi.set(path, data);    
            await firebaseApi.logout();
            dispatch({type: CREATE_OWNER});
        } catch (error){
            console.log(error);
        }
    }
}

const generateOwnerData = (cred) => {
    return {
        [KEY_EMAIL]: cred.name,
        [KEY_ACTIVATED]: true,
        [KEY_DESCRIPTION]: cred.description,
        [KEY_NAME]: cred.name
    }
}

const generateOwnerPath = (uuid) => {
    return `/${OWNER_KEY}/${uuid}`;
}

const generateEmployeeData = (cred) => {
    return {
        [KEY_EMAIL]: cred.name,
        [KEY_ACTIVATED]: true,
        [KEY_DESCRIPTION]: cred.description,
        [KEY_NAME]: cred.name
    }
}

const generateEmployeePath = (uuid) => {
    return `${EMPLOYEE_KEY}/${uuid}`;
}