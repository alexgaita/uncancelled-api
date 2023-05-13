import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ScenarioService } from './scenario.service';
import { MagicGptService } from '../magic-gpt/magic-gpt.service';
import { CreateScenarioDto } from './dto/create-scenario.dto';
import { UpdateScenarioDto } from './dto/update-scenario.dto';
import {
  GenerateSettings,
  speakingStyle,
} from '../magic-gpt/magic-gpt.service';

@Controller('scenario')
export class ScenarioController {
  constructor(
    private readonly scenarioService: ScenarioService,
    private readonly magicGptService: MagicGptService,
  ) {}

  @Post()
  async create(@Body() createScenarioDto: CreateScenarioDto) {
    const settings: GenerateSettings = {
      violence: createScenarioDto.violence,
      dramatic: createScenarioDto.dramatic,
      funny: createScenarioDto.funny,
      isInstructional: createScenarioDto.isInstructional,
      isPixelArt: createScenarioDto.isPixelArt,
      language: createScenarioDto.language,
      style: createScenarioDto.style,
    };
    const _gptDesc = await this.magicGptService.generateDescription(
      createScenarioDto.seasonId,
      settings,
    );
    return this.scenarioService.create(createScenarioDto);
  }

  @Get()
  findAll() {
    return this.scenarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scenarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateScenarioDto: UpdateScenarioDto) {
    return this.scenarioService.update(+id, updateScenarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scenarioService.remove(+id);
  }
}
