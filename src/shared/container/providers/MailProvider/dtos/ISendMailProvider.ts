import IParseMailProviderDTO from 'shared/container/providers/MailTemplateProvider/dtos/IParseTemplateDTO';

interface IMailContent {
  name: string;
  email: string;
}

export default interface ISendMailDTO {
  to: IMailContent;
  from?: IMailContent;
  subject: string;
  templateData: IParseMailProviderDTO;
}
