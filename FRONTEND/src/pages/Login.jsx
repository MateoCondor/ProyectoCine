import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from './axios';
import { useAuth } from '../context/AuthContext'; // Asegúrate de actualizar la ruta según la estructura de tu proyecto

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // Estado para los mensajes
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/users/login', {
        email,
        password,
      });
      setMessage('Ingreso exitoso');
      login();
      setTimeout(() => {
        navigate('/'); // Redirige al usuario a la página de inicio o cualquier otra página después de iniciar sesión
      }, 1000); // Espera 2 segundos antes de redirigir
    } catch (err) {
      console.error(err);
      if (err.response && err.response.status === 401) {
        setMessage('Correo o contraseña incorrectos');
      } else {
        setMessage('Ocurrió un error, por favor intente nuevamente');
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container" style={{ marginTop: '70px' }}>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card border-dark">
              <div className="card-body">
                <h2 className="card-title text-center mb-4">Iniciar sesión</h2>
                {message && (
                  <div className={`alert ${message === 'Ingreso exitoso' ? 'alert-success' : 'alert-danger'}`} role="alert">
                    {message}
                  </div>
                )}
                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo electrónico</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Ingrese su correo electrónico"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Ingrese su contraseña"
                    />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-warning w-50">Iniciar sesión</button>
                  </div>
                </form>
                <div className="text-center mt-3">
                  <p>¿No tienes una cuenta? <Link to="/register">Registrarse</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
