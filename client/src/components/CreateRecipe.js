import React, { useState } from "react";
import TimeInput from "./TimeInput";
import TextField from "@material-ui/core/TextField";
import PriceInput from './PriceInput';
import Button from '@material-ui/core/Button';

function CreateRecipe(props) {
  const [recipe, setRecipe] = useState({
    title: '',
    ingredients: [],
    tags: [],
    time_minutes: 0,
    amount: 0,
    link: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setRecipe(prevTag => {
      return {
        ...prevTag,
        [name]: value,
      };
    });
  }

  function submitRecipe(event) {
    props.onAdd(recipe);
    setRecipe({
      title: '',
      ingredients: [],
      tags: [],
      time_minutes: 0,
      amount: 0,
      link: '',
    });
    event.preventDefault();
  }

  return (
    <div>
        <form>
                <TextField name="title" id="outlined-full-width" fullWidth label="Recipe Title" variant="outlined" onChange={handleChange} />
                <TimeInput name="time_minutes" onChange={handleChange}/>
                <PriceInput name="amount" onChange={handleChange}/>
                <TextField name="link" id="outlined-full-width" fullWidth label="Recipe Link" variant="outlined" onChange={handleChange}/>
                <Button variant="contained" onClick={submitRecipe}>Save</Button>
        </form>
    </div>
  );
}

export default CreateRecipe;
