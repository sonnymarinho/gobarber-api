import { Router } from 'express';

import ForgotPasswordController from '../controllers/ForgotPasswordController';
import ResetPasswordController from '../controllers/ResetPasswordController';

const forgotPasswordController = new ForgotPasswordController();
const resetPasswordController = new ResetPasswordController();

const sessionsRouter = Router();

sessionsRouter.post('/forgot', forgotPasswordController.create);
sessionsRouter.post('/reset', resetPasswordController.create);

export default sessionsRouter;
