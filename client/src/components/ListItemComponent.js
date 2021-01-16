import React from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

function ListItemComponent(props) {
  
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div>
      <ListItem>
            <ListItemText
                primary={props.title}
            />
            <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              <button onClick={handleClick}>
              <DeleteIcon/>
              </button>
                
            </IconButton>
            </ListItemSecondaryAction>
       </ListItem>
    </div>
  );
}

export default ListItemComponent;
