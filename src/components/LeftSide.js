import React, { useContext } from "react";
import ExerciseItem from "./ExerciseItem";
import styled from "styled-components";

import { ExerciseCreatorContext } from "../context/exerciseCreator/exerciseCreatorState";
const LeftSideContainer = styled.div`
  height: 50px;
  display: flex;
`;
function LeftSide() {
  const exerciseCreatorContext = useContext(ExerciseCreatorContext);
  const { currentSchema, currentExercise } = exerciseCreatorContext;
  return (
    <LeftSideContainer>
      {currentExercise.leftSide !== undefined
        ? currentExercise.leftSide.map((obj, index) => (
            <>
              <ExerciseItem
                key={index}
                last={
                  index === currentExercise.leftSide.length - 1 ? true : false
                }
              />
            </>
          ))
        : null}
    </LeftSideContainer>
  );
}

export default LeftSide;
