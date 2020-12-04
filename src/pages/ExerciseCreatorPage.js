import React from "react";
import Wrapper from "../components/UniversalComponents/Wrapper";
import ExerciseForm from "../components/ExerciseCreatorComponents/ExerciseForm";
import SchemaList from "../components/ExerciseCreatorComponents/SchemasList";
function ExerciseCreator() {
  return (
    <Wrapper>
      <SchemaList />
      <ExerciseForm location="creator" />
    </Wrapper>
  );
}

export default ExerciseCreator;
