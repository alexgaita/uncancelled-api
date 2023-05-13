import { HttpService } from '@nestjs/axios';
export declare enum speakingStyle {
    british = "british"
}
export type GenerateSettings = {
    violence: number;
    dramatic: number;
    funny: number;
    isInstructional: boolean;
    isPixelArt: boolean;
    language: string;
    style: speakingStyle;
};
export declare class ChatgptService {
    private http;
    constructor(http: HttpService);
    generateDescription(_seasonId: string, _settings: GenerateSettings): Promise<string>;
}
