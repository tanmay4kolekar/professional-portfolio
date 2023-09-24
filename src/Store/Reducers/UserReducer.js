import { THEME_TYPES } from "../../Utility/Constants/AppConstants";
import { SET_THEME_TYPE } from "../ActionTypes/ActionTypes";

const initialState = {
  theme: THEME_TYPES.dark,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME_TYPE:
      return {
        ...state,
        theme: action.payload.themeType,
      };
    default:
      return state;
  }
};
export default UserReducer;
