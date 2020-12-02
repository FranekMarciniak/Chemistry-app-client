import React from "react";
import Wrapper from "../components/Wrapper";
import ExerciseFrom from "../components/ExerciseForm";
import SchemaList from "../components/SchemasList";
function ExerciseCreator() {
  return (
    <Wrapper>
      <SchemaList />
      <ExerciseFrom />
    </Wrapper>
  );
}

export default ExerciseCreator;
