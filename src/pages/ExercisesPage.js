import React, { useEffect, useContext } from "react";
import Wrapper from "../components/UniversalComponents/Wrapper";
import ExerciseTestForm from "../components/ExerciseComponents/ExerciseTestForm.js";
import { ExerciseCreatorContext } from "../context/exerciseCreator/exerciseCreatorState";

function ExercisesPage() {
  return (
    <Wrapper>
      <ExerciseTestForm />
    </Wrapper>
  );
}

export default ExercisesPage;
