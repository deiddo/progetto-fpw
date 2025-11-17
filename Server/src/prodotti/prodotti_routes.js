const { Router } = require('express');
const controller = require('./prodotti_controller');

const router = Router();

router.get('/', controller.getListaProdotti);
router.get('/:id', controller.getProdottoById);

router.post('/', controller.addProdotto);


module.exports = router;


