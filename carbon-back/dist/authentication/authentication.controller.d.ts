import { LoginRequest } from "./authentication.request";
import { AuthenticationService } from "./authentication.service";
export declare class AuthenticationController {
    private readonly authenticationService;
    constructor(authenticationService: AuthenticationService);
    login(loginRequest: LoginRequest): Promise<string>;
}
