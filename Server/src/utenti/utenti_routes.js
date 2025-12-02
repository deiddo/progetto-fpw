const { Router } = require('express');
const controller = require('./utenti_controller');

const router = Router();


router.get('/', controller.getListaUtenti);
router.get('/:username', controller.getUtenteByUsername);

router.post('/', controller.addUtente);

router.delete('/:username', controller.deleteUtente);

router.put('/:username', controller.aggiornaPassword);


module.exports = router;


