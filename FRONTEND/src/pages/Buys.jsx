import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavbarAdmin from '../components/NavbarAdmin';

const Buys = () => {
    const [purchases, setPurchases] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/purchases/compras')
            .then(response => {
                setPurchases(response.data);
            })
            .catch(error => {
                console.error('Error al obtener todas las compras:', error);
            });
    }, []);

    return (
        <div>
            <NavbarAdmin />
            <div className="container" style={{ marginTop: '70px' }}>
                <h1>Compras</h1>
                <ul>
                    {purchases.map(purchase => (
                        <li key={purchase._id}>
                            <p>Película: {purchase.movie}</p>
                            <p>Cantidad: {purchase.quantity}</p>
                            <p>Asientos seleccionados: {purchase.selectedSeats.join(', ')}</p>
                            <p>Total: ${purchase.total}</p>
                            <p>Hora: {purchase.time}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Buys;
