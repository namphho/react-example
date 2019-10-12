import { untouch, change } from "redux-form";

//reset the respective fields's value with the error if any after
export const resetFields = (props, formName, fieldsObj) => {
  Object.keys(fieldsObj).forEach(fieldKey => {
    //reset the field's value
    props.dispatch(change(formName, fieldKey, fieldsObj[fieldKey]));

    //reset the field's error
    props.dispatch(untouch(formName, fieldKey));
  });
};
