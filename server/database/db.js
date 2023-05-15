import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection =()=> {

    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@mern-todo.c84b1cr.mongodb.net/?retryWrites=true&w=majority`;
    mongoose.connect(MONGODB_URI, { useNewUrlParser: true});

    mongoose.connection.on('connected', ()=> {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', ()=> {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', ()=> {
        console.log('error while connecting with the dataabse', error.message);
    })
}

export default Connection;