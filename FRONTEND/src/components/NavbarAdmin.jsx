import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx'; // Asegúrate de actualizar la ruta según la estructura de tu proyecto
import logo from '../assets/cinestar.png';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <img src={logo} alt="CineStar Logo" className="navbar-brand" width={40} class="d-inline-block align-text-top" />
        <Link className="navbar-brand" to="/admin">CineStar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav me-auto mb-2 mb-lg-0">
            <div className='navbarhover'>
              <Link className="nav-link mx-3" to="/users">Gestion usuarios</Link>
            </div>
            <div className='navbarhover'>
              <Link className="nav-link mx-3" to="/buys">Registro de compras</Link>
            </div>

          </div>
          <div className="d-flex">
            {isAuthenticated ? (
              <button className="btn btn-outline-danger" onClick={handleLogout}>Cerrar Sesión</button>
            ) : (
              <Link to="/login" className="btn btn-outline-warning">Iniciar Sesión</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

