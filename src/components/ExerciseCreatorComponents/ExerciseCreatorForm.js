import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { ExerciseCreatorContext } from "../../context/exerciseCreator/exerciseCreatorState";
import LeftSide from "../ExerciseComponents/LeftSide";
import RightSide from "../ExerciseComponents/RightSide";
import MiddleArrow from "../UniversalComponents/MiddleArrow";
import { Button } from "@material-ui/core";
import ExerciseCreatorName from "./ExerciseCreatorName";

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
    currentSchema,
    currentExercise,
    setExerciseFromSchema,
    clearCurrentExercise,
    clearCurrentSchema,
  } = exerciseCreatorContext;

  useEffect(() => {
    //Clearing current exercise in global state
    clearCurrentExercise();
    //Takes current schema from state and generates "currentExercise" boilerplate
    setExerciseFromSchema(currentSchema);
  }, [currentSchema]);
  return (
    <ExerciseFormWrapper>
      {/*
      This if checks if currentExercise has arguments to generate
      */}
      {currentExercise.leftSide !== undefined &&
      currentExercise.rightSide !== undefined &&
      currentExercise.rightSide.length > 0 &&
      currentExercise.leftSide.length > 0 ? (
        <ExerciseCreatorName />
      ) : null}
      <LeftSide />
      {currentSchema.leftSide > 0 && currentSchema.rightSide > 0 ? (
        <MiddleArrow top={currentSchema.top} />
      ) : null}
      <RightSide />
      {currentSchema.leftSide > 0 && currentSchema.rightSide > 0 ? (
        <ButtonWrapper>
          <Button
            variant="contained"
            color="secondary"
            disableElevation
            onClick={() =>
              console.log({ exercise: currentExercise, schema: currentSchema })
            }
          >
            Add exercise
          </Button>
        </ButtonWrapper>
      ) : null}
    </ExerciseFormWrapper>
  );
}

export default ExerciseCreatorForm;
