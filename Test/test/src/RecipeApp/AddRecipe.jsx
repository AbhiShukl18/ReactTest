import React, { useState } from "react";
import "./Style/addRecipe.css";
import { useNavigate } from "react-router-dom";
import "./RecipeDetails"
import "./RecipeList1"
import { toast } from "react-hot-toast";



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

  //  const keys= Object.keys(addedreceipe);
  //  console.log(keys, "keys");
  //  const values= Object.values(addedreceipe)
  //  console.log(values, "values");
    // for(let i=0; i<addedreceipe.length-1; i++){
    //   console.log(i)
    //   // console.log(key)
    //   console.log(addedreceipe[i])  
    //   // console.log(key.addedreceipe)  

      
    if(!(addedreceipe.title)){
      toast.error(` Title is mandatory`);
  }
  else if(!(addedreceipe.description)){
    toast.error(` Description is mandatory`);
  }
  else if(!(addedreceipe.ingredients)){
    toast.error(` Ingredients are mandatory`);
  }
  else if(!(addedreceipe.preparation)){
    toast.error(` Preparation Steps are mandatory`);
  }
  else if(!(addedreceipe.image)){
    toast.error(` Please upload Image`);
  }

  else{

    setRecipes((previous)=>[...previous, addedreceipe]);
   
    redirect("/")
    toast.success("Recipe added succesfully");
  }

  }
  return (
    <>
      <link rel="stylesheet" href="addRecipe.css" />
      <div>
        <div className="body">
          <h1>Add Your Receipe here</h1>
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
              <input type="file" id="textfield" onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}/>    {/*https://www.geeksforgeeks.org/how-to-upload-image-and-preview-it-using-reactjs/ */}
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
