import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Pagar = () => {
    const [name, setName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [billingAddress, setBillingAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
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
            <div className="container" style={{ marginTop: '70px' }}>
                <h1>Pagar Boletos de Cine</h1>
                <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
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
                    <button type="submit" className="btn btn-primary btn-block">Pagar</button>
                </form>
            </div>
        </div>
    );
};

export default Pagar;

