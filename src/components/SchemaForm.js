import React from "react";
import { TextField, Typography, makeStyles, Switch } from "@material-ui/core";
import FormRow from "./FormRow";
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
});
function SchemaForm() {
  const classes = useStyles();
  return (
    <>
      <FormRow>
        <Typography className={classes.typography}>
          Podaj Nazwę schematu
        </Typography>
        <TextField
          required
          id="outlined"
          label="Nazwa"
          InputLabelProps={{
            shrink: true,
          }}
          className={classes.textFiled}
        />
      </FormRow>
      <FormRow>
        <Typography className={classes.typography}>
          Podaj liczbę substraktów
        </Typography>
        <TextField
          required
          size="small"
          id="outlined"
          label="Number"
          InputLabelProps={{
            shrink: true,
          }}
          className={classes.textFiledNumber}
        />
      </FormRow>

      <FormRow>
        <Typography className={classes.typography}>
          Podaj liczbę Produktów
        </Typography>
        <TextField
          required
          size="small"
          id="outlined"
          label="Number"
          InputLabelProps={{
            shrink: true,
          }}
          className={classes.textFiledNumber}
        />
      </FormRow>
      <FormRow>
        <Typography className={classes.typography}>
          Czy chcesz dyngs nad strzałką
        </Typography>
        <Switch
          name="checkedA"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      </FormRow>
    </>
  );
}

export default SchemaForm;
