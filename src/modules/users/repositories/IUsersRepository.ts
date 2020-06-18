import User from '@modules/users/infra/typeorm/entities/User';
import ICrateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import IFindALlProvidersDTO from '../dtos/IFindAllProviders';

export default interface IUsersRepository {
  findAllProviders(except_user_id: IFindALlProvidersDTO): Promise<User[]>;
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  create(data: ICrateUserDTO): Promise<User>;
  save(user: User): Promise<User>;
}
