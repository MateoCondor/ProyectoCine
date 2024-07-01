import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Register = () => {
  return (
    <div>
      <Navbar />
      <div className="container" style={{ marginTop: '70px' }}>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center mb-4">Registro</h2>
                <form>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">Nombre de usuario</label>
                    <input type="text" className="form-control" id="username" placeholder="Ingrese su nombre de usuario" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo electrónico</label>
                    <input type="email" className="form-control" id="email" placeholder="Ingrese su correo electrónico" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="password" placeholder="Ingrese su contraseña" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirmar contraseña</label>
                    <input type="password" className="form-control" id="confirmPassword" placeholder="Confirme su contraseña" />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Registrarse</button>
                </form>
                <div className="text-center mt-3">
                  <p>¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
