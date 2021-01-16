import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";

function CreateTag(props) {
  const [tag, setTag] = useState({
    name: "",
  });

  function handleChange(event) {
    const value = event.target.value;
    setTag(prevTag => {
      return {
        ...prevTag,
        name: value
      };
    });
  }

  function submitTag(event) {
    props.onAdd(tag);
    setTag({
      name: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
            <TextField id="outlined" label="Ingredient Name" variant="outlined" onChange={handleChange} value={tag.name}/>
            <Fab color="primary" aria-label="add" onClick={submitTag}>
                <AddIcon/>
            </Fab>
        </form>
    </div>
  );
}

export default CreateTag;
