"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GithubRepo {
    constructor(name, html_url, description, language) {
        this.name = name;
        this.html_url = html_url;
        this.description = description;
        this.language = language;
    }
}
exports.default = GithubRepo;
