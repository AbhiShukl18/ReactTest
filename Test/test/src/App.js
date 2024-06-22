import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import AddRecipe from './RecipeApp/AddRecipe';


function App() {
  return (
    <div className="App">
      <Routes>

      <Route path="/home" element={ < Home /> } />
      <Route path='/add-recipe' element= {< AddRecipe/> } />
      </Routes>
      
    </div>
  );
}

export default App;
