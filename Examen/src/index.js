import Fastify from 'fastify'
import cors from "@fastify/cors"
import postRoutes from './routes/post.routes.js';
import { connectDb } from './database.js';
import formbody from "@fastify/formbody";
import multer from "fastify-multer"

connectDb();

const fastify = Fastify({
  logger: true
})

fastify.register(cors,{origin: "*"});
fastify.register(formbody);
fastify.register(multer.contentParser);

//Rutas

fastify.register(postRoutes,{prefix:"/post"});

const start = async () => {
    try {
      await fastify.listen({ port: 4000,
    host: "0.0.0.0" })
      console.log("Escuchandote por el puerto 4mil");
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start()

  // BACKEND 3 TERMINADO CON FASTIFY :) ESPIMANGO