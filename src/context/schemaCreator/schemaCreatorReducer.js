import {
  SET_SCHEMA_NAME,
  SET_SCHEMA_LEFT,
  SET_SCHEMA_RIGHT,
  SET_SCHEMA_TOP,
  SET_SCHEMA_ERROR,
  CLEAR_SCHEMA_ERROR,
} from "../types.js";
export default (state, action) => {
  switch (action.type) {
    case SET_SCHEMA_NAME:
      return { ...state, name: action.payload };
    case SET_SCHEMA_LEFT:
      return { ...state, leftSide: parseInt(action.payload) };
    case SET_SCHEMA_RIGHT:
      return { ...state, rightSide: parseInt(action.payload) };
    case SET_SCHEMA_TOP:
      return { ...state, top: action.payload };
    default:
      return { ...state };
  }
};
