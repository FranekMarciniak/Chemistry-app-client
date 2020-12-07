import {
  SET_CURRENT_SCHEMA,
  CLEAR_CURRENT_SCHEMA,
  SET_EXERCISE_FROM_SCHEMA,
  CLEAR_CURRENT_EXERCISE,
  SET_EXERCISE_NAME,
  SET_EXERCISE_TOP,
  SET_CURRENT_SCHEMA_FROM_API,
  SET_CURRENT_TEST_EXERCISE,
  GET_SCHEMAS_FROM_API,
  GET_EXERCISE_FROM_API,
} from "../types.js";
import axios from "axios";
import React, { useReducer, createContext } from "react";
import ExerciseCreatorReducer from "./exerciseCreatorReducer";
export const ExerciseCreatorContext = createContext();
const { Provider } = ExerciseCreatorContext;
function ExerciseCreatorState(props) {
  const initialState = {
    testExercise: {},
    currentSchema: {},
    schemas: [],
    currentExercise: {},
  };
  const [state, dispatch] = useReducer(ExerciseCreatorReducer, initialState);
  const setCurrentSchemaFromList = (id) => {
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
  const clearCurrentSchema = () => {
    dispatch({
      type: CLEAR_CURRENT_SCHEMA,
    });
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
  const setCurrentSchemaFromAPI = (data) => {
    dispatch({
      type: SET_CURRENT_SCHEMA_FROM_API,
      payload: data,
    });
  };
  const setCurrentTestExercise = (data) => {
    dispatch({
      type: SET_CURRENT_TEST_EXERCISE,
      payload: data,
    });
  };
  const getSchemasFromAPI = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get("http://localhost:5000/api/schemas", config);
      dispatch({ type: GET_SCHEMAS_FROM_API, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
  const getExerciseFromAPI = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(
        "http://localhost:5000/api/exercises",
        config
      );
      dispatch({ type: GET_EXERCISE_FROM_API, payload: res.data[0] });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Provider
      value={{
        schemas: state.schemas,
        currentExercise: state.currentExercise,
        currentSchema: state.currentSchema,
        testExercise: state.testExercise,
        setCurrentSchemaFromList,
        updateExercise,
        setExerciseFromSchema,
        clearCurrentExercise,
        setExerciseName,
        setExerciseTop,
        setCurrentSchemaFromAPI,
        setCurrentTestExercise,
        clearCurrentSchema,
        getSchemasFromAPI,
        getExerciseFromAPI,
      }}
    >
      {props.children}
    </Provider>
  );
}

export default ExerciseCreatorState;
