import {} from "../types.js";
import React, { useReducer, createContext } from "react";
import ExerciseTestReducer from "./exerciseTestReducer";
export const ExerciseTestContext = createContext();
const { Provider } = ExerciseTestContext;
function ExerciseTestState(props) {
  const initialState = {};
  const [state, dispatch] = useReducer(ExerciseTestReducer, initialState);
  return (
    <Provider
      value={{
        hej: 1,
      }}
    >
      {props.children}
    </Provider>
  );
}

export default ExerciseTestState;
