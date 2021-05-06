const express = require('express');
const router = express.Router();
const { getProducts, getProductsbyId } = require('../controllers/productController')

router.route('/').get(getProducts)

router.route('/:id').get(getProductsbyId)

module.exports = router