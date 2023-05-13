import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateScenarioDto } from './dto/create-scenario.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Scenario } from './entity/scenario.model';
import { UpdateScenarioDto } from './dto/update-scenario.dto';

@Injectable()
export class ScenarioService {
    constructor(
        @InjectModel(Scenario)
        private readonly scenarioRepo: typeof Scenario
    ) {}  
    
    async create(createScenarioDto: CreateScenarioDto) {
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
