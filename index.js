import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL).then(( ) => {
         console.log('Database is connected successfully');
         app.listen(PORT, () =>{
            console.log(`Server is running on port ${PORT}`);
  });
  // ...existing code...

process.on('SIGINT', async () => {
  await mongoose.disconnect();
  console.log('Disconnected from MongoDB');
  process.exit(0);
});
})

.catch((error)=>console.log(error));
