import React, { useState} from "react";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";

function CreateIngredient(props) {
  const [ingredient, setIngredient] = useState({
    name: '',
  });

  function handleChange(event) {
    const value = event.target.value;
    setIngredient(prevIngredient => {
      return {
        ...prevIngredient,
        name: value
      };
    });
  }

  function submitIngredient() {
    props.onAdd(ingredient);
    
    setIngredient({
      name: "",
    });
  }

  

  return (
    <div>
      <form>
            <TextField id="outlined" label="Ingredient Name" variant="outlined" onChange={handleChange} value={ingredient.name}/>
            <Fab color="primary" aria-label="add" onClick={submitIngredient}>
                <AddIcon/>
            </Fab>
        </form>
    </div>
  );
}

export default CreateIngredient;
