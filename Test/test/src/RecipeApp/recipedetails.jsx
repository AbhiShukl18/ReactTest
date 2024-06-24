import React from 'react'
import "./RecipeDetails";
import "./AddRecipe";
import "./Style/recipedetails.css";

import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const RecipeDetails = ({recipes}) => {
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
              
              <h1>Title {recipe.title}</h1>
              <img src={recipe.image} alt={recipe.title} width={"500px"} height={"400px"}/>
              <dl>
              <dt>Description:-</dt>
              <dd>{recipe.description}</dd>
              <dt>ingredients:- </dt> 
              <dd>{recipe.ingredients}</dd>
              </dl>
              </div>  {/*box */}
            </div> //index 
            ))} 
    </div>
    </>
  )
}

export default RecipeDetails;
