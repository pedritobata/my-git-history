"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This function builds the final response for the user service
 * @param user
 */
function default_1(user) {
    if (Object.keys(user).length === 0) {
        return {};
    }
    const response = {
        name: user.name,
        login: user.login,
        avatar_url: user.avatar_url
    };
    return response;
}
exports.default = default_1;
