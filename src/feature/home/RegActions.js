import {
  KEY_EMAIL,
  KEY_ACTIVATED,
  KEY_DESCRIPTION,
  KEY_NAME,
  OWNER_KEY,
  EMPLOYEE_KEY,
  CREATE_OWNER,
  CREATE_EMPLOYEE,
  GET_OWNER_PROFILE,
  UPDATE_OWNER_KEY_FOR_EMPLOYEE
} from "./RegConstants";

export const createOwner = cred => {
  return async (dispatch, getState, { getFirebase }) => {
    try {
      const firebaseApi = getFirebase();
      var result = await firebaseApi.createUser({
        email: cred.email,
        password: cred.password
      });
      console.log(result.user.uid);
      const path = generateOwnerPath(result.user.uid);
      const data = generateOwnerData(cred);
      await firebaseApi.set(path, data);
      await firebaseApi.logout();
      dispatch({ type: CREATE_OWNER });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createEmployee = cred => {
  return async (dispatch, getState, { getFirebase }) => {
    try {
      const firebaseApi = getFirebase();
      let result = await firebaseApi.createUser({
        email: cred.email,
        password: cred.password
      });
      const path = generateEmployeePath(result.user.uid);
      const data = generateEmployeeData(cred);
      await firebaseApi.set(path, data);
      dispatch({ type: CREATE_EMPLOYEE });
      //todo get owner list
      const ownerProfiles = await firebaseApi.watchEvent(
        "once",
        `/${OWNER_KEY}`
      );
      const array = [];
      Object.keys(ownerProfiles.data).forEach(key => {
        array.push({ ...ownerProfiles.data[key], id: key });
      });
      dispatch({
        type: GET_OWNER_PROFILE,
        payload: {
          data: array
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateOwnerKeyForEmployee = pos => {
  return async (dispatch, getState, { getFirebase }) => {
    try {
      const firebaseApi = getFirebase();
      const {firebase, register} = getState();
      console.log(`employeeId=${firebase.auth.uid}`);
      console.log(`ownerId=${register.ownerProfiles[pos].id}`);
      const result = await firebaseApi.update(
        `/${EMPLOYEE_KEY}/${firebase.auth.uid}`,
        { ownerKey: register.ownerProfiles[pos].id}
      );
      console.log(result);
      dispatch({
        type: UPDATE_OWNER_KEY_FOR_EMPLOYEE,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

const generateOwnerData = cred => {
  return {
    [KEY_EMAIL]: cred.email,
    [KEY_ACTIVATED]: true,
    [KEY_DESCRIPTION]: cred.description,
    [KEY_NAME]: cred.name
  };
};

const generateOwnerPath = uuid => {
  return `/${OWNER_KEY}/${uuid}`;
};

const generateEmployeeData = cred => {
  return {
    [KEY_EMAIL]: cred.name,
    [KEY_ACTIVATED]: true,
    [KEY_DESCRIPTION]: cred.description,
    [KEY_NAME]: cred.name
  };
};

const generateEmployeePath = uuid => {
  return `${EMPLOYEE_KEY}/${uuid}`;
};
