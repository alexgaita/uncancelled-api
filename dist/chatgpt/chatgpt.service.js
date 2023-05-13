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
exports.ChatgptService = exports.speakingStyle = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const process = require("process");
const CHAT_GPT_URL = 'https://api.openai.com/v1/completions';
var speakingStyle;
(function (speakingStyle) {
    speakingStyle["british"] = "british";
})(speakingStyle = exports.speakingStyle || (exports.speakingStyle = {}));
let ChatgptService = class ChatgptService {
    constructor(http) {
        this.http = http;
    }
    async generateDescription(_seasonId, _settings) {
        console.log(_seasonId);
        console.log(_settings);
        const chatGPTData = {
            model: 'text-davinci-003',
            prompt,
            temperature: 1,
            max_tokens: 100,
        };
        const apiKey = process.env.OPENAI_API_KEY;
        const reqHeader = {
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${apiKey}`,
            },
        };
        const response = await this.http
            .post(CHAT_GPT_URL, chatGPTData)
            .toPromise()
            .catch((err) => {
            throw new common_1.HttpException(err.response.data, err.response.status);
        });
        return response.data;
    }
};
ChatgptService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], ChatgptService);
exports.ChatgptService = ChatgptService;
//# sourceMappingURL=chatgpt.service.js.map