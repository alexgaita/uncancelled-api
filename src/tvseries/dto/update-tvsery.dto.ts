import { PartialType } from '@nestjs/mapped-types';
import { CreateTvseryDto } from './create-tvsery.dto';

export class UpdateTvseryDto extends PartialType(CreateTvseryDto) {}
