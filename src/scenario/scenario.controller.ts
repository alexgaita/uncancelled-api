import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ScenarioService } from './scenario.service';
import { CreateScenarioDto } from './dto/create-scenario.dto';
import { UpdateScenarioDto } from './dto/update-scenario.dto';

@Controller('scenario')
export class ScenarioController {

    constructor(private readonly scenarioService: ScenarioService) {}

    @Post()
    create(@Body() scenarioDto: CreateScenarioDto) {
        return this.scenarioService.create(scenarioDto);
    }

    @Get()
    findAll() {
      return this.scenarioService.findAll();
    }


    @Get(":id")
    findAllBySeasonId(@Param('id') id: string){
        return this.scenarioService.findBySeasonId(id);
    }

    @Patch(':id')
    updateUser(@Param('id') scenarioId: string, @Body() updateScenarioDto: UpdateScenarioDto) {
      return this.scenarioService.update(scenarioId, updateScenarioDto);
    }
}
