import {
  SET_CURRENT_SCHEMA,
  CLEAR_CURRENT_SCHEMA,
  SET_EXERCISE_FROM_SCHEMA,
  CLEAR_EXERCISE_FROM_SCHEMA,
} from "../types.js";
export default (state, action) => {
  switch (action.type) {
    case SET_CURRENT_SCHEMA:
      return {
        ...state,
        currentSchema: action.payload,
      };
    case CLEAR_CURRENT_SCHEMA:
      return {
        ...state,
        currentSchema: {},
      };
    case SET_EXERCISE_FROM_SCHEMA:
      return {
        ...state,
        currentExercise: action.payload,
      };

    default:
      return { ...state };
  }
};
