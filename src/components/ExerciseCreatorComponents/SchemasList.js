import React, { useContext, useEffect } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import { ExerciseCreatorContext } from "../../context/exerciseCreator/exerciseCreatorState";

function SchemasList() {
  const exerciseCreatorContext = useContext(ExerciseCreatorContext);
  const {
    schemas,
    setCurrentSchemaFromList,
    currentSchema,
    getSchemasFromAPI,
  } = exerciseCreatorContext;
  useEffect(() => {
    setCurrentSchemaFromList("0");
    getSchemasFromAPI();
  }, []);
  return (
    <>
      <InputLabel id="demo-mutiple-name-label">Nazwa schematu</InputLabel>
      <Select
        labelId="demo-mutiple-name-label"
        value={currentSchema.name === undefined ? "0" : currentSchema.id}
        onChange={(e) => setCurrentSchemaFromList(e.target.value)}
      >
        <MenuItem value="0" key="0">
          <em>Nie no, najpierw wybierz schemat ziom</em>
        </MenuItem>
        {schemas.map((schema, index) => (
          <MenuItem value={schema.id} key={index + 1}>
            {schema.name}
          </MenuItem>
        ))}
      </Select>
    </>
  );
}

export default SchemasList;
