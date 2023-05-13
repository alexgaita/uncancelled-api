import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import * as process from 'process';

const CHAT_GPT_URL = 'https://api.openai.com/v1/completions';
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
};

@Injectable()
export class ChatgptService {
  constructor(private http: HttpService) {}

  async generateDescription(
    _seasonId: string,
    _settings: GenerateSettings,
  ): Promise<string> {
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
        throw new HttpException(err.response.data, err.response.status);
      });

    return response.data;
    // return this.http.get(CHAT_GPT_URL).pipe(map((response) => response.data));
  }
}
