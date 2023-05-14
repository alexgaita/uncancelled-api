import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateScenarioDto } from './dto/create-scenario.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Scenario } from './entity/scenario.model';
import { UpdateScenarioDto } from './dto/update-scenario.dto';
import { ChatgptService, GenerateSettings } from '../chatgpt/chatgpt.service';
import { TvseriesService } from '../tvseries/tvseries.service';

@Injectable()
export class ScenarioService {
  constructor(
    @InjectModel(Scenario)
    private readonly scenarioRepo: typeof Scenario,
    private readonly chatGptService: ChatgptService,
    private readonly tvseriesService: TvseriesService,
  ) {}

  async create(createScenarioDto: Partial<CreateScenarioDto>) {
    const tvSeries = await this.tvseriesService.findById(
      createScenarioDto.tvSeriesId,
    );
    const settings: GenerateSettings = {
      violence: createScenarioDto.violence,
      dramatic: createScenarioDto.dramatic,
      funny: createScenarioDto.funny,
      isInstructional: createScenarioDto.isInstructional,
      isPixelArt: createScenarioDto.isPixelart,
      language: createScenarioDto.language,
      style: createScenarioDto.style,
      tvSeriesName: tvSeries.name,
    };
    const chatGptResult = await this.chatGptService.generateDescription(
      createScenarioDto.seasonId,
      settings,
    );
    createScenarioDto.fullStory = chatGptResult;
    const teachMidwaySyntax =
      await this.chatGptService.generateMidjourneySettings();
    console.log(`teachMidwaySyntax: ${teachMidwaySyntax}`);
    const midwayPrompts =
      await this.chatGptService.generateMidjourneyDescription(
        createScenarioDto.fullStory,
        tvSeries.name,
      );
    console.log(`midwayPrompts: ${midwayPrompts}`);

    //call bridge to discordBot to generate imgs
    const img = await this.chatGptService.generateDalleImg('a white cat');
    console.log(`Dalle rezult: ${img}`);

    console.log('Scenarion: ', createScenarioDto);
    return await this.scenarioRepo.create(createScenarioDto);
  }

  async findAll() {
    return await this.scenarioRepo.findAll();
  }

  async update(id: string, updateScenarioDto: UpdateScenarioDto) {
    const scenario = await this.scenarioRepo.findByPk(id);

    if (!scenario) {
      console.error('Scenario not found!');
      throw new NotFoundException('Scenario not found!');
    }

    scenario.like = updateScenarioDto.like;
    scenario.dislike = updateScenarioDto.dislike;

    return await this.scenarioRepo.create(scenario);
  }
}
