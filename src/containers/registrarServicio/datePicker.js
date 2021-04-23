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
  const { label, handlerFechaFinChange, handlerFechaInicioChange } = props;
  return (
    <TextField
      
      id="datetime-local"
      label={label}
      onChange={
        label == 'Fecha hora inicio'
        ?
        handlerFechaInicioChange
        :
        handlerFechaFinChange
      }
      type="datetime-local"
      defaultValue="2021-04-25T10:30"
      className={classes.textField}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
}
