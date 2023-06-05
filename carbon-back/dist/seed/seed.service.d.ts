import { UsersService } from "src/users/users.service";
export declare class SeedService {
    private readonly usersService;
    constructor(usersService: UsersService);
    seed(): Promise<void>;
}
