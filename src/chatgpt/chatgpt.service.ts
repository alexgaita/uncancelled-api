import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';

const CHAT_GPT_URL = 'https://webhook.site/36d12604-0f23-4fbf-b540-12c52ff4e8b9';
export enum speakingStyle {
  british = 'british',
}
export type GenerateSettings = {
  violence: number;
  dramatic: number;
  funny: number;
  isInstructional: boolean;
  isPixelArt: boolean;
  language: string;
  style: speakingStyle;
}

@Injectable()
export class ChatgptService {
    constructor(private http: HttpService) {}
    
    async generateDescription(
        _seasonId: string,
        _settings: GenerateSettings,
      ): Promise<string> {
        console.log(_seasonId);
        console.log(_settings);
        const response = await this.http
          .get(CHAT_GPT_URL)
          .toPromise()
          .catch((err) => {
            throw new HttpException(err.response.data, err.response.status);
          });
    
        return response.data;
        // return this.http.get(CHAT_GPT_URL).pipe(map((response) => response.data));
      }
}
