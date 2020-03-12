import ResetPasswordTypes from "./types";

const setEmailChecked = value => {
  return {
    type: ResetPasswordTypes.SET_CHECKED_EMAIL,
    value
  };
};

const setCodeChecked = value => {
  return {
    type: ResetPasswordTypes.SET_CHECKED_CODE,
    value
  };
};

const resetCheck = () => {
  return {
    type: ResetPasswordTypes.RESET_CHECK
  };
};

export default { setEmailChecked, setCodeChecked, resetCheck };
