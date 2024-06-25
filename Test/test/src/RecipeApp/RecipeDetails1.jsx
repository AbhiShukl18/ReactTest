import React from 'react'
import "./RecipeDetails1";
import "./AddRecipe";
import "./Style/recipedetails.css";

import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const RecipeDetails1 = ({recipes}) => {
  const {title}=useParams();
// console.log({recipes},"rece")
  // console.log(recipe)
  

  return (
    <>
    <link rel="stylesheet" href="recipedetails.css" />
    <div className='details-body'>
    
      {recipes?.map((recipe, index) => (
          <div key={index}>
           
              <div className='details'>  
              
              <h1> Here are the details of {recipe.title} recipe</h1>
              <img src={recipe.image} alt={recipe.title} width={"500px"} height={"400px"}/>
              <dl>
              <dt>Description:-</dt>
              <dd>{recipe.description}</dd>
              <dt>Ingredients:- </dt> 
              <dd>{recipe.ingredients}</dd>
              <dt>Preparation Stpes:- </dt> 
              <dd>{recipe.preparation}</dd>
              </dl>
              </div>  {/*box */}
            </div> //index 
            ))} 
    </div>
    </>
  )
}

export default RecipeDetails1;
