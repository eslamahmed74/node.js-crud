import express from 'express';
import dotenv from 'dotenv';
import { ProductRouter } from './routes/prodcuts-route.js';
import { CategoryRouter } from './routes/category-route.js';
import { UserRouter } from './routes/users-route.js';
import { CartRouter } from './routes/cart-route.js';
import mongoose from 'mongoose';
import { seed } from './seed.js';
import { notFound } from './middleWares/notfound.js';
import { errorHandler } from './middleWares/errorHandler.js';
import setupSwagger from './swagger.js';

dotenv.config();

const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('DB CONNECTED SUCCESSFULLY');
    seed();
  })
  .catch((e) => console.log('error conecting to database : ', e));

app.get('/', (req, res) => res.send('hi'));

app.use('/api', ProductRouter);
app.use('/api', CategoryRouter);
app.use('/api', UserRouter);
app.use('/api', CartRouter);

setupSwagger(app);

app.use(notFound);
app.use(errorHandler);

app.listen(5000, () =>
  console.log(`server is running on port ${process.env.PORT || 3000}`)
);
