import { DB_NAME, PORT } from './constants.js';
import express from 'express';
import mongoose from 'mongoose';
import connectDB from './db/index.js';
import { app } from './app.js';

// const app = express();

connectDB().then(() => {

  app.on('error: ', (error) => {
    console.log(error);
  });

  app.listen(PORT, () => {
    console.log(`chai aur code server is running at port ${PORT}`);
  })
}).catch(error => {
  console.log(error);
})

/*

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

    app.on('Error: ', (error) => {
      console.error(error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`chai aur backend server is running on ${process.env.PORT}`);
    });
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
})();

*/