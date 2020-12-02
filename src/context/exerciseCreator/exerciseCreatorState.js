import {
  SET_CURRENT_SCHEMA,
  CLEAR_CURRENT_SCHEMA,
  SET_EXERCISE_FROM_SCHEMA,
  CLEAR_EXERCISE_FROM_SCHEMA,
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
    console.log(data, obj);

    dispatch({ type: SET_EXERCISE_FROM_SCHEMA, payload: obj });
  };
  return (
    <Provider
      value={{
        schemas: state.schemas,
        currentExercise: state.currentExercise,
        currentSchema: state.currentSchema,
        setCurrentSchema,
        setExerciseFromSchema,
      }}
    >
      {props.children}
    </Provider>
  );
}

export default ExerciseCreatorState;
