import React, { useContext } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";

import { ExerciseCreatorContext } from "../context/exerciseCreator/exerciseCreatorState";

function SchemasList() {
  const exerciseCreatorContext = useContext(ExerciseCreatorContext);
  const { schemas, setCurrentSchema, currentSchema } = exerciseCreatorContext;
  return (
    <>
      <InputLabel id="demo-mutiple-name-label">Nazwa schematu</InputLabel>
      <Select
        labelId="demo-mutiple-name-label"
        value={currentSchema.name === undefined ? "0" : currentSchema.id}
        onChange={(e) => setCurrentSchema(e.target.value)}
      >
        <MenuItem value="0">
          <em>Nie no, najpierw wybierz schemat ziom</em>
        </MenuItem>
        {schemas.map((schema) => (
          <MenuItem value={schema.id}>{schema.name}</MenuItem>
        ))}
      </Select>
    </>
  );
}

export default SchemasList;
