import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [time, setTime] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setTime(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Time to cook:</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={time}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={5}>Five</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={15}>Fifteen</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={25}>Twenty-five</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
          <MenuItem value={35}>Thirty-five</MenuItem>
          <MenuItem value={40}>Fourty</MenuItem>
          <MenuItem value={45}>Fourty-five</MenuItem>
          <MenuItem value={50}>Fifty</MenuItem>
          <MenuItem value={55}>Fifty-five</MenuItem>
          <MenuItem value={60}>Sixty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}