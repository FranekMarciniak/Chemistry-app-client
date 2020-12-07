import {
  SET_CURRENT_SCHEMA,
  CLEAR_CURRENT_SCHEMA,
  SET_EXERCISE_FROM_SCHEMA,
  CHANGE_EXERCISE_LEFT,
  CHANGE_EXERCISE_RIGHT,
  CLEAR_CURRENT_EXERCISE,
  SET_EXERCISE_NAME,
  SET_EXERCISE_TOP,
  SET_CURRENT_SCHEMA_FROM_API,
  SET_CURRENT_TEST_EXERCISE,
  GET_SCHEMAS_FROM_API,
  GET_EXERCISE_FROM_API,
} from "../types.js";
export default (state, action) => {
  switch (action.type) {
    case SET_CURRENT_SCHEMA_FROM_API:
      return {
        ...state,
        currentSchema: action.payload,
      };
    case SET_CURRENT_TEST_EXERCISE:
      return {
        ...state,
        testExercise: action.payload,
      };

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
    case CHANGE_EXERCISE_LEFT:
      return {
        ...state,
        currentExercise: {
          ...state.currentExercise,
          leftSide: state.currentExercise.leftSide.map((obj) =>
            obj.index === action.payload.index ? action.payload : obj
          ),
        },
      };
    case CHANGE_EXERCISE_RIGHT:
      return {
        ...state,
        currentExercise: {
          ...state.currentExercise,
          rightSide: state.currentExercise.rightSide.map((obj) =>
            obj.index === action.payload.index ? action.payload : obj
          ),
        },
      };
    case CLEAR_CURRENT_EXERCISE:
      return {
        ...state,
        currentExercise: {
          ...state.currentExercise,
          rightSide: state.currentExercise.rightSide.map((obj) => {
            return { ...obj, ratio: "", value: "" };
          }),
          leftSide: state.currentExercise.leftSide.map((obj) => {
            return { ...obj, ratio: "", value: "" };
          }),
        },
      };
    case SET_EXERCISE_NAME:
      return {
        ...state,
        currentExercise: {
          ...state.currentExercise,
          name: action.payload,
        },
      };
    case SET_EXERCISE_TOP:
      return {
        ...state,
        currentExercise: {
          ...state.currentExercise,
          top: action.payload,
        },
      };
    case GET_SCHEMAS_FROM_API:
      return {
        ...state,
        schemas: action.payload,
      };
    case GET_EXERCISE_FROM_API:
      return {
        ...state,
        testExercise: action.payload.exercise,
        currentSchema: action.payload.schema,
      };
    default:
      return { ...state };
  }
};
