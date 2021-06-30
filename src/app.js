import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import authRoutes from './routes/auth.routes';
import custumerRoutes from './routes/customers.routes';
import productRoutes from './routes/products.routes';
const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.get('/', (req, res )=>{
    res.json('Welcome');
});

app.use('/auth',authRoutes);
app.use('/products', productRoutes);
app.use('/customer', custumerRoutes);

export default app;