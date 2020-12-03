import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { ExerciseCreatorContext } from "../../context/exerciseCreator/exerciseCreatorState";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import MiddleArrow from "../UniversalComponents/MiddleArrow";
import { Button, TextField } from "@material-ui/core";
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
const NameWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 50px;
  flex-direction: column;
  margin-bottom: 30px;
  div {
    width: 50%;
  }
`;
function ExerciseForm() {
  const exerciseCreatorContext = useContext(ExerciseCreatorContext);
  const {
    currentSchema,
    currentExercise,
    setExerciseFromSchema,
    clearCurrentExercise,
    setExerciseName,
  } = exerciseCreatorContext;
  useEffect(() => {
    clearCurrentExercise();
    setExerciseFromSchema(currentSchema);
  }, [currentSchema]);
  return (
    <ExerciseFormWrapper>
      {currentSchema.leftSide > 0 && currentSchema.rightSide > 0 ? (
        <NameWrapper>
          <TextField
            required
            label="Nazwa przykładu"
            id="name"
            InputLabelProps={{
              shrink: true,
            }}
            value={currentExercise.name}
            onChange={(e) => setExerciseName(e.target.value)}
          />
        </NameWrapper>
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
