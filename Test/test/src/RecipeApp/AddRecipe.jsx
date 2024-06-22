import React, { useState } from "react";
import "./Style/addRecipe.css";
import { useNavigate } from "react-router-dom";
import "./RecipeDetails"
import "./RecipeList"


const AddRecipe = ({ setRecipes }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");
  const [image, setImage] = useState(null);
  const redirect=useNavigate();
  

  function handleSubmit(event) {
    event.preventDefault();
    const addedreceipe = {
      title,
      description,
      ingredients,
      preparation,
      image,
    };
    setRecipes((previous)=>[...previous, addedreceipe]);
    redirect("/")
  }
  return (
    <>
      <link rel="stylesheet" href="addRecipe.css" />
      <div>
        <div className="body">
          <h1>Add receipe here....</h1>
          <form className="formbody" onSubmit={handleSubmit}>
            <div id="fields">
              <label id="label">Title:</label>
              <input
                type="text"
                value={title}
                id="textfield"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div id="fields">
              <label id="label">Description:</label>
              <input
                type="text"
                value={description}
                id="textfield"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div id="fields">
              <label id="label">Ingredients:</label>
              <textarea
                id="textarea"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
              />
            </div>

            <div id="fields">
              <label id="label">Preparation Steps:</label>
              <textarea
                id="textarea"
                value={preparation}
                onChange={(e) => setPreparation(e.target.value)}
              />
            </div>

            <div id="fields">
              <label id="label">Image:</label>
              <input type="file" id="textfield" onChange={(e) => setImage(e.target.files[0])}/>
            </div>
            <div id="fields">
              <button type="submit" id="submit">
                Add Recipe
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddRecipe;
