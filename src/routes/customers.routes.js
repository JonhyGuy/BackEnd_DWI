import { Router } from 'express';
import * as customerController from '../controllers/customer.controller'
const router = Router();

router.get('/',customerController.getCustomer);
// router.get('/:id',productController.getProductById);
router.post('/', customerController.createCustomer);
router.put('/:id', customerController.updateCustomerById);
router.delete('/:id', customerController.deleteCustomerById);

export default router;
