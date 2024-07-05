import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx'; // Asegúrate de actualizar la ruta según la estructura de tu proyecto

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Cartelera from './pages/Cartelera.jsx';
import Comprar from './pages/Comprar.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Pagar from './pages/Pagar.jsx';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cartelera" element={<Cartelera />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/comprar/:id" element={<Comprar />} />
          <Route path="/pagar" element={<Pagar />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
