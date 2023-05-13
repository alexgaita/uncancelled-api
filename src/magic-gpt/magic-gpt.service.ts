import { HttpException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
const CHAT_GPT_URL = 'http://';
export enum speakingStyle {
  british = 'british',
}
export type GenerateSettings = {
  violence: string;
  dramatic: number;
  funny: number;
  isInstructional: boolean;
  isPixelArt: boolean;
  language: string;
  style: speakingStyle;
};
@Injectable()
export class MagicGptService {
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
