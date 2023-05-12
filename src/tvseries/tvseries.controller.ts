import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TvseriesService } from './tvseries.service';
import { CreateTvseryDto } from './dto/create-tvsery.dto';
import { UpdateTvseryDto } from './dto/update-tvsery.dto';

@Controller('tvseries')
export class TvseriesController {
  constructor(private readonly tvseriesService: TvseriesService) {}

  @Post()
  create(@Body() createTvseryDto: CreateTvseryDto) {
    return this.tvseriesService.create(createTvseryDto);
  }

  @Get()
  findAll() {
    return this.tvseriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tvseriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTvseryDto: UpdateTvseryDto) {
    return this.tvseriesService.update(+id, updateTvseryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tvseriesService.remove(+id);
  }
}
