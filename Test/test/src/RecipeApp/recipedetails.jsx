import React from 'react'
import "./RecipeDetails";
import "./AddRecipe";
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const RecipeDetails = ({recipes}) => {
  const {title}=useParams();
  const recipe = recipes[title];

  // const recipe=recipes[title]
  console.log(recipe)
  if (!recipe) {
    return <div>Recipe not found</div>;
  }


  return (
    <div>
      <h1>{recipe.title}</h1>
    </div>
  )
}

export default RecipeDetails;
