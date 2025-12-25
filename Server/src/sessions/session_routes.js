const { Router } = require('express');
const controller = require('./session_controller');

const router = Router();


router.get('/isLogged', controller.isLogged);

router.post('/login', controller.login);
router.post('/logout', controller.logout);


module.exports = router;