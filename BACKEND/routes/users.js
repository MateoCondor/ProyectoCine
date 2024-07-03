const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Ruta para el registro de usuarios
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Verificar si el usuario o correo ya existe
    const existingUser = await User.findOne({ username });
    if (existingUser) return res.status(400).json({ message: 'El nombre de usuario ya está registrado' });

    const existingEmail = await User.findOne({ email });
    if (existingEmail) return res.status(400).json({ message: 'El correo electrónico ya está registrado' });

    // Encriptar la contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Crear un nuevo usuario
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Guardar el usuario en la base de datos
    const savedUser = await newUser.save();
    res.status(201).json({ message: 'Registro exitoso', user: savedUser });
  } catch (err) {
    res.status(500).json({ message: 'Ocurrió un error, por favor intente nuevamente' });
  }
});

// Ruta para el inicio de sesión
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Buscar el usuario por su email
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Usuario no encontrado' });

    // Comparar la contraseña
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json({ message: 'Contraseña incorrecta' });

    res.status(200).json({ message: 'Inicio de sesión exitoso', user });
  } catch (err) {
    res.status(500).json({ message: 'Ocurrió un error, por favor intente nuevamente' });
  }
});

module.exports = router;
