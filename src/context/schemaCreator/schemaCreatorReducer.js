import {
  SET_SCHEMA_NAME,
  SET_SCHEMA_LEFT,
  SET_SCHEMA_RIGHT,
  SET_SCHEMA_TOP,
  SET_SCHEMA_ERROR,
  CLEAR_SCHEMA_ERROR,
  POST_SCHEMA_TO_API,
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
    case POST_SCHEMA_TO_API:
      return { name: "", leftSide: 0, rightSide: 0, top: false, errors: [] };
    default:
      return { ...state };
  }
};
