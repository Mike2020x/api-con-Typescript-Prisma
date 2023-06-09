/**
 * Main application routes
 */
import { Application } from 'express';

import userRouter from './api/user';
import postRouter from './api/post';

function routes(app: Application) {
  app.use('/api/users', userRouter);
  app.use('/api/posts', postRouter);
}

export default routes;
