import React, { useState, useEffect } from 'react';
import '../styles/Home.css'
import RecipeCard from '../components/RecipeCard'
import RecipeModal from '../components/RecipeModal';
import { recipeService } from '../api/recipeService';
import Typography from '@material-ui/core/Typography';

export default function Home() {
    const [recipes, setRecipes] = useState([]);
    const addRecipes = async(newRecipe) => {
        console.log(newRecipe);
        setRecipes(prevRecipes => {
            return [...prevRecipes, newRecipe];
        });
        await recipeService.createRecipe(newRecipe);
    }
    // const removeRecipe = (idx) => {
    //     setRecipe(
    //         recipe.filter(
    //             (s, sidx) => idx !== sidx
    //             )
    //     );
    //   }
    return (
        <div className="container">
            <h1 className="app-title">Cookbook</h1>
            <div className="recipe-container">
                    {
                        recipes.map((recipe, idx) => (
                            <RecipeCard 
                                key={idx}
                                id={idx}
                                title={recipe.title}
                                ingredients={recipe.ingredients.map((ing, id) => (
                                    <Typography key={id}>
                                        {ing.name}
                                    </Typography>
                                ))}
                                tags={recipe.tags.map((tag, id) => (
                                    <Typography key={id}>
                                        {tag.name}
                                    </Typography>
                                ))}
                                link={recipe.link}
                                amount={recipe.amount}
                                cookTime={recipe.time_minutes}
                            />
                        ))
                    }
            </div>
            <div className="recipe-modal">
                <RecipeModal onAdd={addRecipes}/>
            </div>
            
        </div>
    );
}

