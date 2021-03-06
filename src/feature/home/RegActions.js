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
import { toastr } from "react-redux-toastr";
import { MODAL_CLOSE } from "../modal/modelConstants";

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
      toastr.success("Thành công", "Tạo tài khoản OWNER thành công");
    } catch (error) {
      console.log(error);
      toastr.error("Thất Bại", `${error}`);
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
      toastr.success("Thành công", "Đã tạo tài khoản NHÂN VIÊN thành công");
    } catch (error) {
      console.log(error);
      toastr.error("Thất Bại", `${error}`);
    }
  };
};

export const updateOwnerKeyForEmployee = ownerProfile => {
  return async (dispatch, getState, { getFirebase }) => {
    try {
      const firebaseApi = getFirebase();
      const { firebase } = getState();
      await firebaseApi.update(
        `/${EMPLOYEE_KEY}/${firebase.auth.uid}`,
        { ownerKey: ownerProfile.id }
      );
      dispatch({
        type: UPDATE_OWNER_KEY_FOR_EMPLOYEE
      });
      dispatch({
        type: MODAL_CLOSE
      });
      toastr.success(
        "Thành công",
        "Đã liên kết tài khoản nhân viên vào tài khoản chủ"
      );
      await firebaseApi.logout();
    } catch (error) {
      console.log(error);
      toastr.error("Thất Bại", `${error}`);
    }
  };
};

export const searchOwner = pattern => {
  return async (dispatch, getState, { getFirebase }) => {
    try {
      const firebaseApi = getFirebase();
      //search owner profiles
      //get owner list
      const ownerProfiles = await firebaseApi.watchEvent(
        "once",
        `/${OWNER_KEY}`,
        "nam",
        {
          isQuery: true,
          queryParams: [
            "notParsed",
            "orderByChild=email",
          ]
        }
      );
      const array = [];
      Object.keys(ownerProfiles.data).forEach(key => {
        array.push({ ...ownerProfiles.data[key], id: key });
      });
      const filteredProfiles = array.filter(profiles => {
          return profiles.email.includes(pattern);
      });
      //set owner profiles state
      dispatch({
        type: GET_OWNER_PROFILE,
        payload: {
          data: filteredProfiles
        }
      });
    } catch (error) {
      toastr.error("Thất Bại", `${error}`);
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
    [KEY_EMAIL]: cred.email,
    [KEY_ACTIVATED]: true,
    [KEY_DESCRIPTION]: cred.description,
    [KEY_NAME]: cred.name
  };
};

const generateEmployeePath = uuid => {
  return `${EMPLOYEE_KEY}/${uuid}`;
};
