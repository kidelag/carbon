import { Role } from "./authentication.enum";
export declare const AuthenticationRequired: () => MethodDecorator & ClassDecorator;
export declare const HasRole: (role: Role) => import("@nestjs/common").CustomDecorator<string>;
