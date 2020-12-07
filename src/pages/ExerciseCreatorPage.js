import React from "react";
import Wrapper from "../components/UniversalComponents/Wrapper";
import ExerciseCreatorForm from "../components/ExerciseCreatorComponents/ExerciseCreatorForm";
import SchemaList from "../components/ExerciseCreatorComponents/SchemasList";
function ExerciseCreator() {
  return (
    <Wrapper>
      <SchemaList />
      <ExerciseCreatorForm location="creator" />
    </Wrapper>
  );
}

export default ExerciseCreator;
