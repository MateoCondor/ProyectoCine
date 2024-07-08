import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Home = () => {

    
    return (
        <div>
            <Navbar />
            <div className="container" style={{ marginTop: '70px' }}>
                <div className="row">
                    <div className="col-md-8">
                        <h1>¡Bienvenido a CineStar!</h1>
                        <p className="lead">
                            Explora nuestra cartelera de peliculas
                        </p>
                        <Link to="/cartelera" className="btn btn-warning btn-lg">
                            Ver cartelera
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Hora de apertura</h5>
                                <p className="card-text">
                                    Lunes - viernes: 8am - 12pm
                                    <br />
                                    Sabado - domingo: 8am - 12am
                                </p>
                            </div>
                        </div>
                        <div className="card mt-3">
                            <div className="card-body">
                                <h5 className="card-title">Puedes contactarnos</h5>
                                <p className="card-text">
                                    E-mail: cinestar@yourcinema.com
                                    <br />
                                    Telefono: +593987456306
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;


