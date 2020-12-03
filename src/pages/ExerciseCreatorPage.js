import React from "react";
import Wrapper from "../components/UniversalComponents/Wrapper";
import ExerciseFrom from "../components/ExerciseCreatorComponents/ExerciseForm";
import SchemaList from "../components/ExerciseCreatorComponents/SchemasList";
function ExerciseCreator() {
  return (
    <Wrapper>
      <SchemaList />
      <ExerciseFrom />
    </Wrapper>
  );
}

export default ExerciseCreator;
