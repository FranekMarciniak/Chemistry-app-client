import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { ExerciseCreatorContext } from "../context/exerciseCreator/exerciseCreatorState";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import MiddleArrow from "./MiddleArrow";
import { Button } from "@material-ui/core";
const ExerciseFormWrapper = styled.div`
  width: 100%;
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
function ExerciseForm() {
  const exerciseCreatorContext = useContext(ExerciseCreatorContext);
  const { currentSchema, currentExercise } = exerciseCreatorContext;
  useEffect(() => {
    exerciseCreatorContext.setExerciseFromSchema(currentSchema);
  }, [currentSchema]);
  return (
    <ExerciseFormWrapper>
      <LeftSide />
      {currentSchema.leftSide > 0 && currentSchema.rightSide > 0 ? (
        <MiddleArrow top={currentSchema.top} />
      ) : null}

      <RightSide />
      {currentSchema.leftSide > 0 && currentSchema.rightSide > 0 ? (
        <ButtonWrapper>
          <Button variant="contained" color="secondary" disableElevation>
            Add exercise
          </Button>
        </ButtonWrapper>
      ) : null}
    </ExerciseFormWrapper>
  );
}

export default ExerciseForm;
