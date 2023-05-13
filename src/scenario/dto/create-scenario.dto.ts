import { speakingStyle } from '../../chatgpt/chatgpt.service';

export class CreateScenarioDto {
  id: string;
  seasonId: string;
  tvSeriesId: string;
  // storyName: string;
  like: number;
  dislike: number;
  violence: number;
  dramatic: number;
  funny: number;
  isInstructional: boolean;
  isPixelart: boolean;
  language: string;
  style: speakingStyle;
  fullStory: string;
}
