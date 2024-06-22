import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import AddRecipe from './RecipeApp/AddRecipe';
import RecipeList from './RecipeApp/RecipeList';
import { useState } from 'react';


function App() {
  const [recipes, setRecipes] = useState([]);

  return (
    <div className="App">
      <Routes>
      
      <Route path="/" element={<RecipeList recipes={recipes} />}  />

      <Route path="/add-recipe" element={<AddRecipe setRecipes={setRecipes} />}  />

      </Routes>
      
    </div>
  );
}

export default App;
