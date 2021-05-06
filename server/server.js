const express = require('express');
const dotenv = require('dotenv') ;
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoute');
const userRoutes = require('./routes/userRoutes');
const port = process.env.PORT || 5000;
const { notFound, errorHandler } = require('./middleware/errorMiddleware')

dotenv.config();

const app = express();

app.use(express.json());

connectDB();

app.get('/', (req, res) => {
    res.send('API is running');
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Express Server Running ${port} in ${process.env.NODE_ENV} mode`);
});