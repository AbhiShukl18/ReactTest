import React from "react";
import AddRecipe from "./AddRecipe";
import "./Style/recipelist.css";
import "./RecipeDetails";
import "./AddRecipe";
import { redirect, useNavigate } from "react-router-dom";

const RecipeList = ({ recipes }) => {

  // const trial={recipes};
// console.log(trial,"recipes");
// console.log(recipes[0].title,"titles");


  const redirectTodetails= useNavigate();

  function handleClick(){

    redirectTodetails(`/recipe-details/${recipes[0].title}`)
  }
  return (
    <>
      <link rel="stylesheet" href="recipelist.css" />
      <div className="list-body">
       
        <h1>Recipes List</h1>
        <a href="./add-recipe"> Click to Add your Recipe </a>
        <div id="list">
        {recipes?.map((recipe, index) => (
          <div key={index}>
           
              <div >
              <p className="box">
                <img onClick={handleClick} src={recipe.image} alt="img"  width={"100%"}/>
              
              <h4 onClick={handleClick}>{recipe.title}</h4>
              </p>
              </div>  {/*box */}
            </div> //index 
            ))} 
          </div>   {/* list*/}
        
      </div>   {/*list-body */}
    </>
  );
};

export default RecipeList;
