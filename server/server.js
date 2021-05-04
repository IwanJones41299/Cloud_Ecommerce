const express = require('express');
const dotenv = require('dotenv') ;
const connectDB = require('./config/db');
// const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoute');
const port = process.env.PORT || 5000;
const { notFound, errorHandler } = require('./middleware/errorMiddleware')

dotenv.config();

const app = express();

connectDB();

// mongoose.connect('mongodb://mongo:27017/docker-ecommerce-website', { useNewUrlParser: true })
//                 .then(() => console.log('MongoDB connected'))
//                 .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('API is running');
})

app.use('/api/products', productRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Express Server Running ${port} in ${process.env.NODE_ENV} mode`);
});