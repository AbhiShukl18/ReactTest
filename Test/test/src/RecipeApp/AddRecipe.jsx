import React, { useState } from 'react'
import "./Style/addRecipe.css"

const AddRecipe = ({addRecipe}) => {

    const[title, setTitle]=useState("");
    const[description, setDescription]=useState("");
    const[ingredients, setIngredients]=useState("");
    const[preparation, setPreparation]=useState("");
    const[image, setImage]=useState();

    function handleSubmit(event){

        event.preventDefault();
        const addedreceipe={title, description, ingredients, preparation, image}
        addRecipe(addedreceipe);
    }
    return (
        <>
        <link rel="stylesheet" href="addRecipe.css" />
        <div>
            <div className="body">
          <h1>Add receipe here....</h1>
          <form className='formbody' onSubmit={handleSubmit}>
            <div id='fields'>
                <label id='label'>Title:</label>
                <input type="text" value={title} id="textfield" onChange={(e)=>setTitle(e.target.value)} />
            </div>
            <div id='fields'>
                <label id='label'>Description:</label>
                <input type="text" value={description} id="textfield" onChange={(e)=>setDescription(e.target.value)}/>
            </div>
            <div id='fields'>
                <label id='label'>Ingredients:</label>
                <textarea  id='textarea' value={ingredients} onChange={(e)=>setIngredients(e.target.value)}/>
            </div>
            
            <div id='fields'>
                <label id='label'>Preparation Steps:</label>
                <textarea id='textarea' value={preparation} onChange={(e)=>setPreparation(e.target.value)}/>
            </div>

            <div id='fields'>
          <label id='label'>Image:</label>
          <input type="file" id="textfield"/>
        </div>
        <div id='fields'>
        <button type="submit" id='submit'>Add Recipe</button>
        </div>
          </form>
          </div>
        </div>
        </>
      )
      
}

export default AddRecipe;
