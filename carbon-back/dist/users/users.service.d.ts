import { Repository } from 'typeorm';
import { User } from './users.entity';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    seed(): Promise<import("typeorm").InsertResult>;
    getUserByEmail(email: string): Promise<User>;
    getUserById(id: string): Promise<User>;
    getUsers(): Promise<User[]>;
}
