import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { ExerciseCreatorContext } from "../../context/exerciseCreator/exerciseCreatorState";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import MiddleArrow from "../UniversalComponents/MiddleArrow";
import { Button } from "@material-ui/core";
import ExerciseCreatorName from "./ExerciseCreatorName";
import ExerciseName from "../ExerciseComponents/ExerciseName";

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

function ExerciseForm({ location }) {
  const exerciseCreatorContext = useContext(ExerciseCreatorContext);
  const {
    currentSchema,
    currentExercise,
    setExerciseFromSchema,
    clearCurrentExercise,
  } = exerciseCreatorContext;

  useEffect(() => {
    clearCurrentExercise();
    setExerciseFromSchema(currentSchema);
  }, [currentSchema]);
  return (
    <ExerciseFormWrapper>
      {location === "creator" ? <ExerciseCreatorName /> : <ExerciseName />}
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
            onClick={() => console.log(currentExercise)}
          >
            Add exercise
          </Button>
        </ButtonWrapper>
      ) : null}
    </ExerciseFormWrapper>
  );
}

export default ExerciseForm;
