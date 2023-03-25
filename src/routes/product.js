const { Router } = require('express');
const router = Router();

const ProductsController = require('../controllers/products_controller');

router.get('/', ProductsController.getProducts);
router.put('/:id',ProductsController.setUser);

module.exports = router;
