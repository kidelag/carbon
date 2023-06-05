"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users/users.service");
const core_1 = require("@nestjs/core");
const jsonwebtoken_1 = require("jsonwebtoken");
let AuthenticationGuard = class AuthenticationGuard {
    constructor(jwtService, usersService, reflector) {
        this.jwtService = jwtService;
        this.usersService = usersService;
        this.reflector = reflector;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const authorizationHeader = request.get("Authorization");
        if (!authorizationHeader) {
            throw new common_1.BadRequestException("Authorization header is missing");
        }
        const [authorizationType, token] = authorizationHeader.split(" ");
        if (authorizationType !== "Bearer") {
            throw new common_1.BadRequestException("Authorization type should be Bearer");
        }
        if (!token) {
            throw new common_1.BadRequestException("Token is missing");
        }
        try {
            const role = this.reflector.get("role", context.getHandler());
            const { id } = this.jwtService.verify(token);
            const user = await this.usersService.getUserById(id);
            console.log(user);
            if (!user) {
                throw new common_1.BadRequestException("Invalid user");
            }
            if (role && user.role !== role) {
                throw new common_1.BadRequestException("Invalid role");
            }
            return true;
        }
        catch (error) {
            if (error instanceof jsonwebtoken_1.JsonWebTokenError) {
                throw new common_1.BadRequestException("Invalid token");
            }
            throw error;
        }
    }
};
AuthenticationGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        users_service_1.UsersService,
        core_1.Reflector])
], AuthenticationGuard);
exports.AuthenticationGuard = AuthenticationGuard;
//# sourceMappingURL=authentication.guard.js.map