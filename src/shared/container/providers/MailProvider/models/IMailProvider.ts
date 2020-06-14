import ISendMailDTO from '../dtos/ISendMailProvider';

export default interface IMailProvider {
  sendMail(data: ISendMailDTO): Promise<void>;
}
