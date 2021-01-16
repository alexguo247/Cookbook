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
import CreateRecipe from './CreateRecipe';
import { recipeService } from '../api/recipeService';


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
        <Box p={3}>
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
    width: 500,
  },
  paper: {
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ModalTabs() {
const [recipes, setRecipes] = useState([]);
const [ingredients, setIngredients] = useState([]);
const [tags, setTags] = useState([]);
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const addIngredient = async(newIngredient) => {
      setIngredients(prevIngredients => {
          return [...prevIngredients, newIngredient]
        })
         await recipeService.createIngredient(newIngredient);
  }
  const addTag = (newTag) => {
    setTags(prevTags => {
        return [...prevTags, newTag];
    });

}
const addRecipe = (newRecipe) => {
    newRecipe.ingredients = ingredients;
    newRecipe.tags = tags;
    setRecipes(prevRecipes => {
        return [...prevRecipes, newRecipe];
    });
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
      const removeRecipe = (idx) => {
        setRecipes(
            recipes.filter(
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
            <CreateRecipe onAdd={addRecipe}/>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}