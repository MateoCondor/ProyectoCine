import React from 'react';
import Navbar from '../components/Navbar';
import teamImage from '../assets/cinestar.png'; // Importa una imagen de equipo como ejemplo

const About = () => {
    return (
        <div>
            <Navbar />
            <div className="container" style={{ marginTop: '70px' }}>
                <div className="row">
                    <div className="col-md-8">
                        <h1>About CineStar</h1>
                        <p className="lead">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula blandit quam, ac tempus eros efficitur in.
                        </p>
                        <p>
                            CineStar is dedicated to bringing you the best cinema experience in town. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel justo felis.
                        </p>
                        <h3>Our History</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada, libero in placerat luctus, risus urna placerat justo, nec sagittis justo libero eu orci.
                        </p>
                        <h3>Our Mission</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae ultricies enim, id laoreet dui. Vestibulum aliquam, dui ut luctus eleifend, nisl elit placerat metus, nec mollis lorem leo eu nunc.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src={teamImage} className="card-img-top" alt="Our Team" />
                            <div className="card-body">
                                <h5 className="card-title">Our Team</h5>
                                <p className="card-text">
                                    Meet the passionate team behind CineStar.
                                </p>
                            </div>
                        </div>
                        <div className="card mt-3">
                            <div className="card-body">
                                <h5 className="card-title">Customer Testimonials</h5>
                                <p className="card-text">
                                    "CineStar has the best seats in town! I always enjoy my movie nights here."
                                    <br />
                                    <em>- John Doe</em>
                                </p>
                                <p className="card-text">
                                    "Great experience! The staff is friendly and the popcorn is amazing."
                                    <br />
                                    <em>- Jane Smith</em>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
