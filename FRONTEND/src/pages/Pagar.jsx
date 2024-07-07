import React, { useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Modal, Button, Spinner } from 'react-bootstrap';

const Pagar = () => {
    const location = useLocation();
    const { quantity, selectedSeats, total } = location.state || {};
    const [name, setName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [billingAddress, setBillingAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');

    const [showProcessing, setShowProcessing] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowProcessing(true);

        // Simula el tiempo de procesamiento
        setTimeout(() => {
            setShowProcessing(false);
            setShowSuccess(true);  
        }, 2500);

        // Aquí puedes manejar la lógica para procesar el pago
        console.log('Nombre:', name);
        console.log('Número de tarjeta:', cardNumber);
        console.log('Fecha de expiración:', expiryDate);
        console.log('CVV:', cvv);
        console.log('Dirección de facturación:', billingAddress);
        console.log('Ciudad:', city);
        console.log('Código postal:', postalCode);
        // Resetear el formulario
        setName('');
        setCardNumber('');
        setExpiryDate('');
        setCvv('');
        setBillingAddress('');
        setCity('');
        setPostalCode('');

       
    };

    return (
        <div>
            <Navbar />
            <div className="container d-flex flex-column align-items-center" style={{ marginTop: '70px' }}>
                <h1 className="mb-4 text-center">Pagar Boletos</h1>
                <div className="card mt-4 w-50">
                    <div className="card-body">
                        <h3 className="card-title">Detalles de la Compra</h3>
                        <p className="card-text"><b>Película: </b>{location.state.movie}</p>
                        <p className="card-text"><b>Cantidad de boletos: </b>{quantity}</p>
                        <p className="card-text"><b>Asientos seleccionados: </b>{selectedSeats && selectedSeats.join(', ')}</p>
                        <p className="card-text"><b>Total a pagar: </b> ${total}</p>
                    </div>
                </div>
                <div className="card w-50 my-4">
                    <div className="card-body">
                        <h3 className="card-title">Información de Pago</h3>
                        <form onSubmit={handleSubmit} className="mt-3">
                            <div className="form-group">
                                <label htmlFor="name">Nombre en la tarjeta</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cardNumber">Número de tarjeta</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="cardNumber"
                                    value={cardNumber}
                                    onChange={(e) => setCardNumber(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="expiryDate">Fecha de expiración</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="expiryDate"
                                        value={expiryDate}
                                        onChange={(e) => setExpiryDate(e.target.value)}
                                        placeholder="MM/AA"
                                        required
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="cvv">CVV</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="cvv"
                                        value={cvv}
                                        onChange={(e) => setCvv(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="billingAddress">Dirección de facturación</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="billingAddress"
                                    value={billingAddress}
                                    onChange={(e) => setBillingAddress(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="city">Ciudad</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="city"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="postalCode">Código postal</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="postalCode"
                                        value={postalCode}
                                        onChange={(e) => setPostalCode(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-warning btn-block mt-3 w-50">Pagar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Modal de procesamiento */}
            <Modal show={showProcessing} onHide={() => setShowProcessing(false)} backdrop="static" keyboard={false}>
                <Modal.Body className="text-center">
                    <Spinner animation="border" role="status">
                        <span className="sr-only"></span>
                    </Spinner>
                    <p className="mt-3">Procesando compra...</p>
                </Modal.Body>
            </Modal>

            {/* Modal de éxito */}
            <Modal show={showSuccess} onHide={() => setShowSuccess(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Compra Exitosa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>¡La compra se ha realizado con éxito!</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={() => setShowSuccess(false)}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Pagar;
