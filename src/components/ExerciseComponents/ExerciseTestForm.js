import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import MiddleArrow from "../UniversalComponents/MiddleArrow";
import { ExerciseCreatorContext } from "../../context/exerciseCreator/exerciseCreatorState";
import RightSide from "./RightSide";
import LeftSide from "./LeftSide";

import { Button } from "@material-ui/core";
import ExerciseName from "./ExerciseName";
const ExerciseFormWrapper = styled.div`
  width: 90%;
  height: 100px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
const ButtonWrapper = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 25px;
  display: flex;
`;

function ExerciseCreatorForm() {
  //Using useContext hook to bring in global state
  const exerciseCreatorContext = useContext(ExerciseCreatorContext);
  //Destructuring methods from global context
  const {
    currentExercise,
    currentSchema,
    setCurrentSchemaFromAPI,
    setExerciseFromSchema,
    setCurrentTestExercise,
    testExercise,
    getExerciseFromAPI,
    setExerciseName,
  } = exerciseCreatorContext;
  useEffect(() => {
    getExerciseFromAPI();
  }, []);
  useEffect(() => {
    setExerciseFromSchema(currentSchema);
  }, [currentSchema]);
  return (
    <ExerciseFormWrapper>
      {currentExercise.leftSide !== undefined &&
      currentExercise.rightSide !== undefined &&
      currentExercise.rightSide.length > 0 &&
      currentExercise.leftSide.length > 0 ? (
        <ExerciseName />
      ) : null}
      <LeftSide />
      {currentSchema.leftSide > 0 && currentSchema.rightSide > 0 ? (
        <MiddleArrow top={currentSchema.top} />
      ) : null}
      <RightSide />
    </ExerciseFormWrapper>
  );
}

export default ExerciseCreatorForm;
