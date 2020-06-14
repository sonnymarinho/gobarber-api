import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakeUserTokensRepository from '@modules/users/repositories/fakes/FakeUserTokensRepository';
import FakeMailProvider from '@shared/container/providers/MailProvider/fakes/FakeMailProvider';
import SendForgotPassowrdEmailService from './SendForgotPasswordEmailService';

let fakeUsersRepository: FakeUsersRepository;
let fakeUserTokensRepository: FakeUserTokensRepository;
let fakeMailProvider: FakeMailProvider;
let sendForgotPassowrdEmail: SendForgotPassowrdEmailService;

describe('SendForgotPassowrdEmail', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeMailProvider = new FakeMailProvider();
    fakeUserTokensRepository = new FakeUserTokensRepository();

    sendForgotPassowrdEmail = new SendForgotPassowrdEmailService(
      fakeUsersRepository,
      fakeMailProvider,
      fakeUserTokensRepository,
    );
  });

  it('should not be able to recover the password using the email', async () => {
    const sendMail = jest.spyOn(fakeMailProvider, 'sendMail');

    await fakeUsersRepository.create({
      name: 'Jhon Doe',
      email: 'jhon.doe@domain.com',
      password: '123456',
    });

    await sendForgotPassowrdEmail.execute({
      email: 'jhon.doe@domain.com',
    });

    expect(sendMail).toHaveBeenCalled();
  });

  it('should not be able to recover a non-existing user password', async () => {
    await expect(
      sendForgotPassowrdEmail.execute({
        email: 'jhon.doe@domain.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should generate a forgot password token', async () => {
    const sendMail = jest.spyOn(fakeUserTokensRepository, 'generate');

    await fakeUsersRepository.create({
      name: 'Jhon Doe',
      email: 'jhon.doe@domain.com',
      password: '123456',
    });

    await sendForgotPassowrdEmail.execute({
      email: 'jhon.doe@domain.com',
    });

    expect(sendMail).toHaveBeenCalled();
  });
});
