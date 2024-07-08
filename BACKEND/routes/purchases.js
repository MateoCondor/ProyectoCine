const express = require('express');
const router = express.Router();
const Purchase = require('../models/Purchase');
const PaymentInfo = require('../models/PaymentInfo');

// Ruta para registrar una compra
router.post('/comprar', async (req, res) => {
    try {
        const { userId, movie, quantity, selectedSeats, total, time, savePaymentInfo, paymentInfo } = req.body;

        // Crear una nueva compra
        const purchase = await Purchase.create({
            userId,
            movie,
            quantity,
            selectedSeats,
            total,
            time
        });

        // Si el usuario quiere guardar la información de pago
        if (savePaymentInfo) {
            const existingPaymentInfo = await PaymentInfo.findOne({ userId });
            if (existingPaymentInfo) {
                // Actualizar la información de pago existente
                await existingPaymentInfo.update(paymentInfo);
            } else {
                // Crear nueva información de pago
                await PaymentInfo.create({ userId, ...paymentInfo });
            }
        }

        res.status(201).json({ message: 'Compra registrada con éxito', purchase });
    } catch (error) {
        console.error('Error al registrar la compra:', error);
        res.status(500).json({ message: 'Error al registrar la compra' });
    }
});

module.exports = router;
