import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {
    //
  }

  execute({ email, name }: IRequest): User {
    const newUser = { email, name };

    const user = this.usersRepository.create(newUser);

    return user;
  }
}

export { CreateUserUseCase };
