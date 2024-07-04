import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx'; // Asegúrate de actualizar la ruta según la estructura de tu proyecto

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">CineFalso</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">Acerca de</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cartelera">Cartelera</Link>
            </li>
          </ul>
          <div className="d-flex">
            {isAuthenticated ? (
              <>
                <Link to="/comprar" className="btn btn-outline-light me-2">Comprar</Link>
                <button className="btn btn-outline-light" onClick={logout}>Cerrar Sesión</button>
              </>
            ) : (
              <Link to="/login" className="btn btn-outline-light">Iniciar Sesión</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
