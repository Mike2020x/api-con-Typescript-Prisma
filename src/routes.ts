/**
 * Main application routes
 */
import { Application } from 'express';

import userRouter from './api/user';
import postRouter from './api/post';
import reviewRouter from './api/review';

function routes(app: Application) {
  app.use('/api/users', userRouter);
  app.use('/api/posts', postRouter);
  app.use('/api/reviews', reviewRouter);
  app.use("/", (req, res) => {
    res.send("Bienvenido al ejercicio: api-con typescript-prisma escribe las diferente rutas para probarlas o usa postman para hacer peticiones.")
  })
}

export default routes;
