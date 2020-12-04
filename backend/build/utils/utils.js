"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRepoNameFromUrl = (url) => {
    if (!url)
        return "";
    const parts = url.split("/");
    return parts[5];
};
