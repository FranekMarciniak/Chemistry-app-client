import React, { useContext } from "react";
import styled from "styled-components";
import {
  TextField,
  Typography,
  makeStyles,
  Switch,
  Button,
  Input,
} from "@material-ui/core";
import { SchemaCreatorContext } from "../../context/schemaCreator/schemaCreatorState";

const useStyles = makeStyles({
  textFiled: {
    marginLeft: "15px",
  },
  textFiledNumber: {
    width: "90px",
    marginLeft: "15px",
  },
  typography: {
    width: "200px",
    fontSize: "16px",
    fontWeight: "600",
  },
  button: {
    height: "40px",
  },
});
const FormRow = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-end;
  justify-items: center;
`;
const SchemaFormWrapper = styled.div`
  width: 90%;
`;
const SchemaForm = () => {
  const classes = useStyles();
  const schemaCreatorContext = useContext(SchemaCreatorContext);
  const {
    setSchemaLeft,
    setSchemaName,
    setSchemaRight,
    setSchemaTop,
    submitSchema,
    state,
  } = schemaCreatorContext;
  return (
    <SchemaFormWrapper>
      <FormRow>
        <Typography className={classes.typography}>
          Podaj Nazwę schematu
        </Typography>
        <TextField
          required
          label="Nazwa schematu"
          id="name"
          InputLabelProps={{
            shrink: true,
          }}
          value={state.name}
          className={classes.textFiled}
          onChange={(e) => {
            setSchemaName(e.target.value);
          }}
        />
      </FormRow>

      <FormRow>
        <Typography className={classes.typography}>
          Podaj liczbę substraktów
        </Typography>
        <TextField
          required
          size="small"
          label="Numer"
          type="number"
          id="leftSide"
          InputLabelProps={{
            shrink: true,
          }}
          className={classes.textFiledNumber}
          value={state.leftSide}
          onChange={(e) => setSchemaLeft(e.target.value)}
        />
      </FormRow>

      <FormRow>
        <Typography className={classes.typography}>
          Podaj liczbę produktów
        </Typography>
        <TextField
          required
          size="small"
          type="number"
          label="Numer"
          id="rightSide"
          InputLabelProps={{
            shrink: true,
          }}
          className={classes.textFiledNumber}
          value={state.rightSide}
          onChange={(e) => setSchemaRight(e.target.value)}
        />
      </FormRow>
      <FormRow>
        <Typography className={classes.typography}>
          Czy chcesz dyngs nad strzałką
        </Typography>
        <Switch
          name="checkedA"
          id="top"
          inputProps={{ "aria-label": "secondary checkbox" }}
          onChange={(e) => {
            setSchemaTop(e.target.checked);
          }}
          checked={state.top}
        />
      </FormRow>
      <FormRow>
        <Button
          variant="contained"
          color="secondary"
          disableElevation
          className={classes.button}
          onClick={submitSchema}
        >
          Dodaj Schemat
        </Button>
      </FormRow>
    </SchemaFormWrapper>
  );
};

export default SchemaForm;
