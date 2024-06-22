import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import AddRecipe from './RecipeApp/AddRecipe';
import RecipeList from './RecipeApp/RecipeList';
import { useState } from 'react';


function App() {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };
  return (
    <div className="App">
      <Routes>

      <Route path="/home" element={ < Home /> } />
      <Route path='/add-recipe' element= {< AddRecipe/> } />
      <Route path='/recipe-list' element= {< RecipeList/> } />

      </Routes>
      
    </div>
  );
}

export default App;
