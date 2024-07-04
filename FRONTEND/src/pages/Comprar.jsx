import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const SeatSelection = ({ quantity, onSeatsSelected }) => {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const totalSeats = 30; // Total de asientos disponibles
    const seats = Array.from({ length: totalSeats }, (_, i) => i + 1);

    const handleSeatClick = (seat) => {
        if (selectedSeats.includes(seat)) {
            setSelectedSeats(selectedSeats.filter(s => s !== seat));
        } else if (selectedSeats.length < quantity) {
            setSelectedSeats([...selectedSeats, seat]);
        }
    };

    const handleConfirmSelection = () => {
        if (selectedSeats.length === quantity) {
            onSeatsSelected(selectedSeats);
        } else {
            alert(`Debes seleccionar exactamente ${quantity} asientos.`);
        }
    };

    return (
        <div className="card mt-4">
            <div className="card-body">
                <h2 className="card-title">Selecciona tus Asientos</h2>
                <div className="row row-cols-5">
                    {seats.map(seat => (
                        <div
                            key={seat}
                            className={`col seat ${selectedSeats.includes(seat) ? 'selected' : ''}`}
                            onClick={() => handleSeatClick(seat)}
                            style={{ cursor: 'pointer', border: '1px solid #ccc', padding: '10px', marginBottom: '10px', textAlign: 'center' }}
                        >
                            {seat}
                        </div>
                    ))}
                </div>
                <button
                    className="btn btn-primary mt-3"
                    onClick={handleConfirmSelection}
                    disabled={selectedSeats.length !== quantity}
                >
                    Confirmar Selección
                </button>
            </div>
        </div>
    );
};

const Comprar = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [showSeatSelection, setShowSeatSelection] = useState(false);
    const [selectedSeats, setSelectedSeats] = useState([]);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/movies/${id}`);
                setMovie(response.data);
            } catch (error) {
                console.error('Error fetching movie:', error);
            }
        };

        fetchMovie();
    }, [id]);

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handlePurchase = () => {
        setShowSeatSelection(true);
    };

    const handleSeatsSelected = (seats) => {
        setSelectedSeats(seats);
        // Aquí puedes manejar la lógica para continuar con la compra con los asientos seleccionados
        console.log(`Asientos seleccionados: ${seats}`);
    };

    return (
        <div>
            <Navbar />
            <div className="container" style={{ marginTop: '70px' }}>
                {movie ? (
                    <div className="card mb-4">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img" alt={movie.title} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h1 className="card-title">{movie.title}</h1>
                                    <p className="card-text">{movie.overview}</p>
                                    <p className="card-text"><small className="text-muted">Fecha de Estreno: {movie.release_date}</small></p>
                                    <p className="card-text"><small className="text-muted">Popularidad: {movie.popularity}</small></p>
                                    <p className="card-text"><small className="text-muted">Promedio de Votos: {movie.vote_average}</small></p>
                                    
                                    <div className="form-group">
                                        <label htmlFor="quantity">Cantidad de Boletos:</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="quantity"
                                            value={quantity}
                                            onChange={handleQuantityChange}
                                            min="1"
                                        />
                                    </div>
                                    <button
                                        className="btn btn-primary mt-3"
                                        onClick={handlePurchase}
                                    >
                                        Comprar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="d-flex justify-content-center">
                        <div role="status">
                            <span className="sr-only">Cargando...</span>
                        </div>
                    </div>
                )}
                {showSeatSelection && (
                    <SeatSelection quantity={quantity} onSeatsSelected={handleSeatsSelected} />
                )}
            </div>
        </div>
    );
};

export default Comprar;
