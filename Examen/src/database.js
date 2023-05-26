import mongoose from 'mongoose';

// const uri='mongodb://127.0.0.1:27017/dbejemplo';

const uri = "mongodb+srv://prueba:prueba@cluster0.44oen5q.mongodb.net/test"


mongoose.set('strictQuery', false)

export const connectDb = async () => { try { const db = await mongoose.connect(uri); console.log('base de datos conectada', db.connection.name); } catch (error) { console.log('error al conectar a la base de datos', error.message); } }     