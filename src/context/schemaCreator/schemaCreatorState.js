import {
  SET_SCHEMA_NAME,
  SET_SCHEMA_LEFT,
  SET_SCHEMA_RIGHT,
  SET_SCHEMA_TOP,
  POST_SCHEMA_TO_API,
} from "../types.js";
import React, { useReducer, createContext } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import SchemaCreatorReducer from "./schemaCreatorReducer";
export const SchemaCreatorContext = createContext();
const { Provider } = SchemaCreatorContext;
function SchemaCreatorState(props) {
  const initialState = {
    name: "",
    leftSide: 0,
    rightSide: 0,
    top: false,
    errors: [],
  };
  const [state, dispatch] = useReducer(SchemaCreatorReducer, initialState);
  const postSchemaToAPI = () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (state.name === "") {
      return;
    }
    if (
      state.leftSide <= 0 ||
      isNaN(state.leftSide) === true ||
      state.rightSide <= 0 ||
      isNaN(state.rightSide) === true
    ) {
      return;
    }
    try {
      const id = uuidv4();
      axios.post(
        "http://localhost:5000/api/schemas",
        {
          name: state.name,
          leftSide: state.leftSide,
          rightSide: state.rightSide,
          top: state.top,
          id,
        },
        config
      );
      dispatch({ type: POST_SCHEMA_TO_API });
    } catch (error) {
      console.error(error);
    }
  };
  const setSchemaName = (data) => {
    dispatch({ type: SET_SCHEMA_NAME, payload: data });
  };
  const setSchemaLeft = (data) => {
    dispatch({ type: SET_SCHEMA_LEFT, payload: data });
  };
  const setSchemaRight = (data) => {
    dispatch({ type: SET_SCHEMA_RIGHT, payload: data });
  };
  const setSchemaTop = (data) => {
    dispatch({ type: SET_SCHEMA_TOP, payload: data });
  };

  return (
    <Provider
      value={{
        setSchemaLeft,
        setSchemaName,
        setSchemaRight,
        setSchemaTop,
        postSchemaToAPI,
        state,
      }}
    >
      {props.children}
    </Provider>
  );
}

export default SchemaCreatorState;
