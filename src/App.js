import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import SingleCocktail from './pages/SingleCocktail';

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar is outside of the Routes component */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cocktail/:id' element={<SingleCocktail />} />
      </Routes>
    </Router>
  );
};

export default App;
