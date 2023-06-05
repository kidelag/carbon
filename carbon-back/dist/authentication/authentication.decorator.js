"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HasRole = exports.AuthenticationRequired = void 0;
const common_1 = require("@nestjs/common");
const authentication_guard_1 = require("./authentication.guard");
const AuthenticationRequired = () => (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard);
exports.AuthenticationRequired = AuthenticationRequired;
const HasRole = (role) => (0, common_1.SetMetadata)("role", role);
exports.HasRole = HasRole;
//# sourceMappingURL=authentication.decorator.js.map