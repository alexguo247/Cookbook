import React, { useState } from 'react';
import '../styles/Home.css'
import RecipeCard from '../components/RecipeCard'
import RecipeModal from '../components/RecipeModal'
import { recipeService } from '../api/recipeService';

export default function Home() {
    const [recipes, setRecipes] = useState([]);

    return (
        <div className="container">
            <h3 className="app-title">Cookbook</h3>
            <div className="recipe-container">
                    {/* {
                        recipes.map((recipe, id) => (
                            <RecipeCard />
                        ))
                    } */}
                <RecipeCard 
                    title="Hi"
                    ingredients="Hi"
                    tags="Hi"
                    image=""
                    link="https://google.ca"
                />
                <RecipeCard 
                    title="Hi"
                    ingredients="Hi"
                    tags="Hi"
                    image=""
                />
                <RecipeCard 
                    title="Hi"
                    ingredients="Hi"
                    tags="Hi"
                    image=""
                />
                <RecipeCard 
                    title="Hi"
                    ingredients="Hi"
                    tags="Hi"
                    image=""
                />
                <RecipeCard 
                    title="Hi"
                    ingredients="Hi"
                    tags="Hi"
                    image=""
                />
            </div>
            <div className="recipe-modal">
                    <RecipeModal 

                    />
            </div>
            
        </div>
    );
}

