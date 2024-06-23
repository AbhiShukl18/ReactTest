import React from 'react'
import AddRecipe from './AddRecipe';
import "./Style/recipelist.css";
import "./RecipeDetails";
import "./AddRecipe";

const RecipeList = ({recipes}) => {
  return (
    <>
    <link rel="stylesheet" href="recipelist.css" />
    <div>
      <a href=""></a>
      <h2>Recipe List</h2>
      {recipes?.map((recipe, index) => (
        <div key={index}>
       
        <div>
          <a href="./recipedetails">{recipe.title}</a>
             
          <a href="./recipedetails">    <img src={recipe.image} alt="img" width={"100%"} /></a>
       
        </div>
      
        </div>
      ))}
    </div>
    </>
  );
}

export default RecipeList
