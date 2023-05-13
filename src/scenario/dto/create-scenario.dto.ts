import { Paragraph } from '../entities/paragraph.entity';
import { Seasons } from '../entities/seasons.entity';
import { speakingStyle } from "../../magic-gpt/magic-gpt.service";

export class CreateScenarioDto {
  id: string;
  paragraph: Paragraph[];
  seasonId: string;
  seasons: Seasons;
  violence: number;
  dramatic: number;
  funny: number;
  isInstructional: boolean;
  isPixelArt: boolean;
  language: string;
  style: speakingStyle;
}
