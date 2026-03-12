const { Router } = require('express');
const router = Router();

// IMPORTANTE: Verifica que el archivo en controllers se llame "auth.controllers.js"
// Si se llama solo "auth.controller.js" (sin la 's'), quítale la 's' aquí abajo.
const { login, register } = require('../controllers/auth.controllers');

router.post('/login', login);
router.post('/register', register);

module.exports = router;
