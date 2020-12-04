import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { ExerciseCreatorContext } from "../../context/exerciseCreator/exerciseCreatorState";
const ExerciseFormWrapper = styled.div`
  width: 90%;
  height: 100px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
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

  return <ExerciseFormWrapper></ExerciseFormWrapper>;
}

export default ExerciseForm;
