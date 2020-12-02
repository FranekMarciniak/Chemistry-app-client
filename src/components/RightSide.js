import React, { useContext } from "react";
import ExerciseItem from "./ExerciseItem";
import styled from "styled-components";

import { ExerciseCreatorContext } from "../context/exerciseCreator/exerciseCreatorState";
const RightSideContainer = styled.div`
  height: 50px;
  display: flex;
`;
function LeftSide() {
  const exerciseCreatorContext = useContext(ExerciseCreatorContext);
  const { currentSchema, currentExercise } = exerciseCreatorContext;
  return (
    <RightSideContainer>
      {currentExercise.rightSide !== undefined
        ? currentExercise.rightSide.map((obj, index) => (
            <>
              <ExerciseItem
                key={index}
                last={
                  index === currentExercise.rightSide.length - 1 ? true : false
                }
              />
            </>
          ))
        : null}
    </RightSideContainer>
  );
}

export default LeftSide;
