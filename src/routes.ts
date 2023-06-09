/**
 * Main application routes
 */
import { Application } from 'express';

import userRouter from './api/user';

function routes(app: Application) {
  app.use('/api/users', userRouter);
}

export default routes;
