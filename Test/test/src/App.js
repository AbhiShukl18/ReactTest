import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AddRecipe from './RecipeApp/AddRecipe';
import { useState } from 'react';
import RecipeList1 from './RecipeApp/RecipeList1';
import RecipeDetails1 from './RecipeApp/RecipeDetails1';
import Todo1 from './ReduxTodo/Todo1';
import Login from './Login/Login';
import Home from './Login/Home';


function App() {
  const [recipes, setRecipes] = useState([]);

  return (
    <div className="App">
      <Routes>
      
      <Route path="/" element={<RecipeList1 recipes={recipes} />}  />

      <Route path="/add-recipe" element={<AddRecipe setRecipes={setRecipes} />}  />
      <Route path="/recipe-details/:title" element={<RecipeDetails1 recipes={recipes} />}  />
      <Route path="Redux-todo" element={<Todo1/>}  />
      <Route path="Redux-login" element={<Login/>}  />
      <Route path="home" element={<Home/>}  />

      </Routes>
      
    </div>
  );
}

export default App;
