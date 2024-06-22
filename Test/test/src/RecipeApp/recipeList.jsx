import React from 'react'
import AddRecipe from './AddRecipe';
import "./Style/recipelist.css"

const RecipeList = ({recipes}) => {
  return (
    <>
    <link rel="stylesheet" href="recipelist.css" />
    <div className="recipe-list">
      <h2>Recipe List</h2>
      {recipes?.map((recipe, index) => (
        <div key={index}>
        <div className="recipe-card">
            <h3>{recipe.title}</h3>
            {recipe.image && <img src={recipe.image} />}
        
        </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default RecipeList
