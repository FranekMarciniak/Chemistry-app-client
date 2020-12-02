import React, { useState, useReducer } from "react";
import {
  TextField,
  Typography,
  makeStyles,
  Switch,
  Button,
  Input,
} from "@material-ui/core";
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
  formRow: {
    width: "100%",
    height: "100px",
    display: "flex",
    alignItems: "flexEnd",
    justifyItems: "center",
  },
  button: {
    height: "40px",
  },
});

const SchemaForm = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "name":
        return { ...state, name: action.payload };
      case "leftSide":
        return { ...state, leftSide: parseInt(action.payload) };
      case "rightSide":
        return { ...state, rightSide: parseInt(action.payload) };
      case "top":
        return { ...state, top: action.payload };
      case "error":
        return {
          ...state,
          errors: [...state.errors, action.payload],
        };
      case "clearError":
        return {
          ...state,
          errors: [],
        };
      default:
        return { ...state };
    }
  };
  const initialState = {
    name: "",
    leftSide: 0,
    rightSide: 0,
    top: false,
    errors: [],
  };

  const classes = useStyles();

  const [state, dispatch] = useReducer(reducer, initialState);

  const onSubmit = () => {
    if (state.name === "") {
      dispatch({ type: "error", payload: "Hej, wpisz nazwę schematu" });
      setTimeout(() => dispatch({ type: "clearError" }), 5000);
      return;
    }
    if (
      state.leftSide <= 0 ||
      isNaN(state.leftSide) === true ||
      state.rightSide <= 0 ||
      isNaN(state.rightSide) === true
    ) {
      dispatch({
        type: "error",
        payload: "Liczba substratów i produktów musi być większa od 0",
      });
      setTimeout(() => dispatch({ type: "clearError" }), 5000);
      return;
    }
    console.log(state);
  };
  return (
    <>
      <div className={classes.formRow}>
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
            dispatch({ type: e.target.id, payload: e.target.value });
          }}
        />
      </div>

      <div className={classes.formRow}>
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
          onChange={(e) =>
            dispatch({ type: e.target.id, payload: e.target.value })
          }
        />
      </div>

      <div className={classes.formRow}>
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
          onChange={(e) =>
            dispatch({ type: e.target.id, payload: e.target.value })
          }
        />
      </div>
      <div className={classes.formRow}>
        <Typography className={classes.typography}>
          Czy chcesz dyngs nad strzałką
        </Typography>
        <Switch
          name="checkedA"
          id="top"
          inputProps={{ "aria-label": "secondary checkbox" }}
          checked={state.top}
          onChange={(e) => {
            dispatch({ type: e.target.id, payload: e.target.checked });
          }}
        />
      </div>
      <div className={classes.formRow}>
        <Button
          variant="contained"
          color="secondary"
          disableElevation
          className={classes.button}
          onClick={onSubmit}
        >
          Dodaj Schemat
        </Button>
      </div>
    </>
  );
};

export default SchemaForm;
