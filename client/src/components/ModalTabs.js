import React, {useState} from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import CreateIngredient from './CreateIngredient';
import CreateTag from './CreateTag';
import ListItemComponent from './ListItemComponent';
import CreateImage from './CreateImage';
import { recipeService } from '../api/recipeService';
import TimeInput from "./TimeInput";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={4}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 700,
  },
  paper: {
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ModalTabs(props) {
const [ingredients, setIngredients] = useState([]);
const [tags, setTags] = useState([]);
const [recipe, setRecipe] = useState({
    title: '',
    ingredients: [],
    tags: [],
    time_minutes: 0,
    amount: 0,
    link: '',
});
const [image, setImage] = useState();
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  function handleRecipeChange(event) {
    const { name, value } = event.target;
    setRecipe(prevRecipe => {
      return {
        ...prevRecipe,
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
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const addIngredient = async(newIngredient) => {
    
      setIngredients(prevIngredients => 
          [...prevIngredients, newIngredient]
        )
        
         await recipeService.createIngredient(newIngredient);
         recipe.ingredients = ingredients;
  }
  const addTag = async(newTag) => {
    
    setTags(prevTags => {
        return [...prevTags, newTag];
    });
    
    await recipeService.createTag(newTag);
    recipe.tags = tags;

}
const addImage = async(newImage) => {
    setImage(newImage);
    await recipeService.uploadImage(newImage);
}

    const removeIngredient = (idx) => {
        setIngredients(
            ingredients.filter(
                (s, sidx) => idx !== sidx
                )
        );
      }
      const removeTag = (idx) => {
        setTags(
            tags.filter(
                (s, sidx) => idx !== sidx
                )
        );
      }
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Ingredients" {...a11yProps(0)} />
          <Tab label="Tags" {...a11yProps(1)} />
          <Tab label="Recipe" {...a11yProps(2)} />
          <Tab label="Add Image" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <CreateIngredient onAdd={addIngredient} />
            <Typography variant="h6" className={classes.title}>
                    Ingredients:
            </Typography>
            
            <List >
                {ingredients.map((ing, idx) => {
                    return (
                        <ListItemComponent 
                            key={idx}
                            id={idx}
                            title={ing.name}
                            onDelete={removeIngredient}
                        />
                    )    
                })}
            </List>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <CreateTag onAdd={addTag} />
                <Typography variant="h6" className={classes.title}>
                        Tags
                </Typography>
                <List >
                    {tags.map((tag, idx) => (
                       <ListItemComponent 
                        key={idx}
                        id={idx}
                        title={tag.name}
                        onDelete={removeTag}
                        />
                    ))}
                </List>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
            <form>
                <TextField name="title" id="outlined-full-width" fullWidth label="Recipe Title" variant="outlined" onChange={handleRecipeChange} />
                <TimeInput name="time_minutes" onChange={handleRecipeChange}/>
                <TextField name="amount" id="outlined-full-width" fullWidth label="Price ($)" variant="outlined"onChange={handleRecipeChange}/>
                <TextField name="link" id="outlined-full-width" fullWidth label="Recipe Link" variant="outlined" onChange={handleRecipeChange}/>
                <Button variant="contained" onClick={submitRecipe}>Save</Button>
            </form>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
            <CreateImage onAdd={addImage}/>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}