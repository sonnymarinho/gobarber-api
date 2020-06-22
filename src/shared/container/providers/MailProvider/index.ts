import { container } from 'tsyringe';

import EtherealMailProvider from './implementations/EtherealMailProvider';
import IMailProvider from './models/IMailProvider';

const providers = {
  ethereal: EtherealMailProvider,
};

container.registerSingleton<IMailProvider>('MailProvider', providers.ethereal);
