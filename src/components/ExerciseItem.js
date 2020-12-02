import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PlusSign from "./PlusSign";
const useStyles = makeStyles(() => ({
  ratio: {
    width: "20px",
    marginRight: "8px",
  },
  value: {
    width: "80px",
    marginRight: "16px",
  },
  div: {
    width: "124px",
    display: "flex",
  },
}));
function ExerciseItem({ last, key }) {
  const classes = useStyles();
  return (
    <div className={classes.div}>
      <TextField className={classes.ratio} />
      <TextField className={classes.value} />
      {last === false ? <PlusSign /> : null}
    </div>
  );
}

export default ExerciseItem;
