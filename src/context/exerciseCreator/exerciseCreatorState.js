import {
  SET_CURRENT_SCHEMA,
  CLEAR_CURRENT_SCHEMA,
  SET_EXERCISE_FROM_SCHEMA,
  CLEAR_EXERCISE_FROM_SCHEMA,
  CLEAR_CURRENT_EXERCISE,
  SET_EXERCISE_NAME,
  CLEAR_EXERCISE_NAME,
  SET_EXERCISE_TOP,
} from "../types.js";
import React, { useReducer, createContext } from "react";
import ExerciseCreatorReducer from "./exerciseCreatorReducer";
export const ExerciseCreatorContext = createContext();
const { Provider } = ExerciseCreatorContext;
function ExerciseCreatorState(props) {
  const initialState = {
    currentExercise: {},
    currentSchema: {},
    schemas: [
      {
        name: "Schemacik",
        leftSide: 2,
        rightSide: 2,
        top: true,
        id: 1,
        errors: [],
      },
      {
        name: "Drugi schemacik byczq",
        leftSide: 3,
        rightSide: 2,
        top: false,
        id: 2,
        errors: [],
      },
      {
        name: "TYPIE TO TRZECI SCHEMACIK",
        leftSide: 3,
        rightSide: 3,
        top: true,
        id: 3,
        errors: [],
      },
    ],
    currentExercise: {},
  };
  const [state, dispatch] = useReducer(ExerciseCreatorReducer, initialState);
  const setCurrentSchema = (id) => {
    if (id == "0") {
      dispatch({
        type: CLEAR_CURRENT_SCHEMA,
      });
    } else {
      dispatch({
        type: SET_CURRENT_SCHEMA,
        payload: state.schemas.find((schema) => schema.id == id),
      });
    }
  };
  const setExerciseFromSchema = (data) => {
    const obj = {
      name: "",
      top: data.top === true ? "" : false,
      leftSide: Array(data.leftSide === undefined ? 0 : data.leftSide)
        .fill(null)
        .map((slot, index) => {
          return {
            ratio: "",
            value: "",
            index,
          };
        }),
      rightSide: Array(data.rightSide === undefined ? 0 : data.rightSide)
        .fill(null)
        .map((slot, index) => {
          return {
            ratio: "",
            value: "",
            index,
          };
        }),
    };

    dispatch({ type: SET_EXERCISE_FROM_SCHEMA, payload: obj });
  };
  const updateExercise = (data, type) => {
    dispatch({ type, payload: data });
  };
  const clearCurrentExercise = () => {
    if (state.currentExercise.rightSide !== undefined) {
      dispatch({ type: CLEAR_CURRENT_EXERCISE });
    }
  };
  const setExerciseName = (data) => {
    dispatch({ type: SET_EXERCISE_NAME, payload: data });
  };
  const setExerciseTop = (data) => {
    dispatch({ type: SET_EXERCISE_TOP, payload: data });
  };
  return (
    <Provider
      value={{
        schemas: state.schemas,
        currentExercise: state.currentExercise,
        currentSchema: state.currentSchema,
        setCurrentSchema,
        updateExercise,
        setExerciseFromSchema,
        clearCurrentExercise,
        setExerciseName,
        setExerciseTop,
      }}
    >
      {props.children}
    </Provider>
  );
}

export default ExerciseCreatorState;
