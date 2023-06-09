import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from 'typeorm';
import { User } from './entities/users.entity';
import {CreateUsersDto} from "./dto/create-users.dto";
import { Role } from 'src/authentication/authentication.enum';

@Injectable()
export class UsersService {
  public constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}

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
    return this.userRepository.insert({ ...createUsersDto });
  }

  public deleteUser(id: string) {
    return this.userRepository.delete({ id });
  }

  public async getConsultantsTotals() {
    const consultants = await this.userRepository.findBy({role:Role.CLIENT});
  const total = consultants.length;
  return total;
  }
}
