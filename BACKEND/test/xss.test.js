const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const usersRouter = require('../routes/users');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', usersRouter);

beforeAll(async () => {
  await mongoose.connect("mongodb://localhost:27017/Test", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.disconnect();
});

describe('XSS Protection', () => {
    it('should sanitize input to prevent XSS', async () => {
        const response = await request(app)
            .post('/api/register')
            .send({
                username: '<script>alert("XSS")</script>',
                email: 'xss@example.com',
                password: 'password123',
                confirmPassword: 'password123',
                firstName: 'XSS',
                lastName: 'Test',
                role: 'client'
            });

        expect(response.statusCode).toBe(201);
        expect(response.body.user.username).not.toBe('<script>alert("XSS")</script>');
        expect(response.body.user.username).toBe('&lt;script&gt;alert("XSS")&lt;/script&gt;'); // Suponiendo que se sanitiza así
    });
});
