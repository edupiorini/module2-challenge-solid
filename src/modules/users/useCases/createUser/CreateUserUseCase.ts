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

    const userExists = this.usersRepository.findByEmail(email);

    if (userExists) {
      throw new Error("user already exists");
    }
    return this.usersRepository.create(newUser);
  }
}

export { CreateUserUseCase };
