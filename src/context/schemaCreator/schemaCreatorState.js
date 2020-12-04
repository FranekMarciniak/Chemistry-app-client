import {
  SET_SCHEMA_NAME,
  SET_SCHEMA_LEFT,
  SET_SCHEMA_RIGHT,
  SET_SCHEMA_TOP,
  SET_SCHEMA_ERROR,
  CLEAR_SCHEMA_ERROR,
} from "../types.js";
import React, { useReducer, createContext } from "react";
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

  const submitSchema = () => {
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
    console.log(state);
  };
  return (
    <Provider
      value={{
        setSchemaLeft,
        setSchemaName,
        setSchemaRight,
        setSchemaTop,
        submitSchema,
        state,
      }}
    >
      {props.children}
    </Provider>
  );
}

export default SchemaCreatorState;
