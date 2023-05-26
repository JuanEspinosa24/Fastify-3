import postCtrl from '../controllers/post.controller.js';
import { upload } from '../middleware/imgUpload.js';

const postRoutes=(fastify,opts,done) => {

fastify.get('/',postCtrl.listar);
fastify.get('/:id',postCtrl.listOne);
fastify.delete('/:id',postCtrl.delete);
fastify.put("/:id",{preHandler:[ upload.single("img")]}, postCtrl.update);
fastify.post("/", {preHandler:[ upload.single("img")]}, postCtrl.add);

done();

}

export default postRoutes;

// ACOPLADO A FASTIFY :)