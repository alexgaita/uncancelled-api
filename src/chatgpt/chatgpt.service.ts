import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import * as process from 'process';
import { readFileSync } from 'fs';

const CHAT_GPT_URL = 'https://api.openai.com/v1/completions';
const DALLE_URL = ' https://api.openai.com/v1/images/generations';
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
  tvSeriesName: string;
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
    let typeOfStory = '';
    _settings.funny > 0 ? (typeOfStory = 'funny') : typeOfStory;
    _settings.dramatic > 0 ? ', dramatic' : typeOfStory;
    _settings.violence > 0 ? ', violent' : typeOfStory;
    const descriptionPrompt = `an you create a fictional story in the "${_settings.tvSeriesName}"tv series universe, continuing after the last episode. The story should be short, ${typeOfStory} ,  and in the same line as the tv series`;

    const chatGPTData = {
      model: 'text-davinci-003',
      prompt: descriptionPrompt,
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

  async generateMidjourneySettings(): Promise<string> {
    const descriptionPrompt = readFileSync('./filename.txt', 'utf-8');
    const chatGPTData = {
      model: 'text-davinci-003',
      prompt: descriptionPrompt,
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
  async generateMidjourneyDescription(
    _story: string,
    _universeName: string,
  ): Promise<string> {
    console.log(_story);

    const descriptionPrompt = readFileSync('./filename.txt', 'utf-8');
    const chatGPTData = {
      model: 'text-davinci-003',
      prompt: descriptionPrompt,
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

  async generateDalleImg(_paragraph: string): Promise<string> {
    console.log(_paragraph);

    const descriptionPrompt = _paragraph;
    const dallEData = {
      prompt: descriptionPrompt,
      n: 1,
      size: '1024x1024',
    };
    const apiKey = process.env.OPENAI_API_KEY;
    const reqHeader = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${apiKey}`,
      },
    };
    const response = await this.http
      .post(DALLE_URL, dallEData)
      .toPromise()
      .catch((err) => {
        throw new HttpException(err.response.data, err.response.status);
      });

    return response.data;
    // return this.http.get(CHAT_GPT_URL).pipe(map((response) => response.data));
  }
}
