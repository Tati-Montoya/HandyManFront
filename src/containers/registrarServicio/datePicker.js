import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DatePicker(props) {
  const classes = useStyles();
  const { label, handlerFechaInicioChange, handlerFechaFinChange } = props;
  return (
    <TextField
      onChange={
        label === 'Fecha hora inicio'
          ? handlerFechaInicioChange
          : handlerFechaFinChange
      }
      id="datetime-local"
      label={label}
      type="datetime-local"
      defaultValue="2021-04-20T10:30"
      className={classes.textField}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
}
