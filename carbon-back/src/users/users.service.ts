import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { hash } from "bcryptjs";
import { Role } from 'src/authentication/authentication.enum';
import {CreateUsersDto} from "./dto/create-users.dto";

@Injectable()
export class UsersService {
  public constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) { }

  public async seed() {
    const userPassword = await hash("password", 10);
    const administratorPassword = await hash("password", 10);

    await this.userRepository.delete({});

    await this.userRepository.insert({
      role: Role.SUPPORT,
      email: "administrator@domain.com",
      password: administratorPassword
    })

    return this.userRepository.insert({
      role: Role.CONSULTANT,
      email: "user@domain.com",
      password: userPassword
    })
  }

  public getUserByEmail(email: string) {
    return this.userRepository.findOneBy({ email });
  }

  public getUserById(id: string) {
    return this.userRepository.findOneBy({ id });
  }

  public getUsers() {
    return this.userRepository.find();
  }

  public createUser(createUsersDto: CreateUsersDto) {
    return this.userRepository.insert({...createUsersDto});
  }
}
