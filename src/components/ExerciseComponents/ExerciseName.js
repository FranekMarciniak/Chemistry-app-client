import React, { useContext } from "react";
import styled from "styled-components";
import { ExerciseCreatorContext } from "../../context/exerciseCreator/exerciseCreatorState";
import { Typography } from "@material-ui/core";

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
function ExerciseName({ name }) {
  const exerciseCreatorContext = useContext(ExerciseCreatorContext);
  const { currentExercise } = exerciseCreatorContext;
  return (
    <NameWrapper>
      <Typography variant="h4">Test name</Typography>
    </NameWrapper>
  );
}

export default ExerciseName;
