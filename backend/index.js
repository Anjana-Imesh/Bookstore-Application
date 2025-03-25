
// backend/index.js
import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import ordersRoute from './routes/ordersRoute.js';
import usersRoute from './routes/usersRoute.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

// Convert `import.meta.url` to the directory name (`__dirname` equivalent in ES modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files (images, etc.) from the 'public/images' folder for App 1
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
//app.use(cors());
app.use(cors({
  origin: 'http://localhost:5173', // Replace with the exact origin
  credentials: true // Allow sending cookies or authentication headers
}));

app.use(cookieParser())

// Route for primary database (mongoDBURL1)
app.get('/', (request, response) => {
  console.log(request);
  return response.status(200).send('Welcome To MERN Stack Tutorial App ');
});

// Use middleware for specific routes
app.use('/books', booksRoute); 
app.use('/orders', ordersRoute);
app.use('/auth', usersRoute)  


// Connecting to primary database (mongoDBURL) for App 
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });


 


