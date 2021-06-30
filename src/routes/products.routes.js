import { Router } from 'express';
import * as productController from '../controllers/products.controller';
import {verifyToken} from '../middlewares'
const router = Router();

router.get('/', verifyToken ,productController.getProduct);
router.get('/:id', verifyToken,productController.getProductById);
router.post('/', verifyToken, productController.createProduct);
router.put('/:id', verifyToken, productController.updateProductById);
router.delete('/:id', verifyToken, productController.deleteProductById);

export default router;