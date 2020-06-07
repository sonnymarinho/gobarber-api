import { Router } from 'express';

import SessionsController from '@modules/users/infra/http/controllers/SessionsController';

const sessionController = new SessionsController();
const sessionsRouter = Router();

sessionsRouter.post('/', sessionController.create);

export default sessionsRouter;
