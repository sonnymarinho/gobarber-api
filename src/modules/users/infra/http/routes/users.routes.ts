import { Router } from 'express';
import multer from 'multer';
import { celebrate, Segments, Joi } from 'celebrate';

import uploadConfig from '@config/upload';

import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import UsersController from '@modules/users/infra/http/controllers/UsersController';
import UserAvatarControler from '@modules/users/infra/http/controllers/UserAvatarControler';

const usersRouter = Router();
const upload = multer(uploadConfig);

const usersController = new UsersController();
const userAvatarControler = new UserAvatarControler();

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  usersController.create,
);

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  userAvatarControler.update,
);

export default usersRouter;
