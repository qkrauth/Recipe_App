import React from "react";
import { Navigate } from "react-router-dom";

const RecipeCard = ({recipe}) => {

    const handleClick = () => {
        Navigate(`/recipe/${recipe.recipe_id}`)
    };

    return (
        <div className="recipe-card">
            <img src="https://colonydiner.com/wp-content/uploads/2021/03/French.jpg" alt="" />
            <h1>"Food Title Here"</h1>
            <button onClick={handleClick}>See More</button>
        </div>
    );
};

export default RecipeCard;