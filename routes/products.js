var express = require('express');
var router = express.Router();
const productMiddleware = require('../middleware/multer')
const path = require('path')






const { adminViewProducts, adminAddProduct, adminAddProductIn, adminEditProduct, adminDeleteProduct, adminEditProductIn } = require('../controllers/products')


router.get('/admin-viewProducts', adminViewProducts);
router.get('/admin-addProduct', adminAddProduct)
router.post('/admin-addProduct', productMiddleware.uploadproductimage, adminAddProductIn)

router.get('/edit-product/', adminEditProduct)
router.post('/admin-editProduct/', productMiddleware.uploadproductimage, adminEditProductIn)
router.get('/delete-product/:id', adminDeleteProduct)


module.exports = router;