import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage'
import { CityPage } from './pages/CityPage/CityPage'

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cities/:cityId' element={<CityPage />} />
      </Routes>
    </div>
  );
}

export default App;
