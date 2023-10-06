import {
  Controller,
  Body,
  UsePipes,
  ValidationPipe,
  BadRequestException,
  Post,
  Get,
} from '@nestjs/common';
import { ConceptService } from './concept.service';
import { BaseService } from 'src/base/base.service';
import { CreateConceptDto } from './dto/create-concept.dto';
import { CreateBaseDto } from 'src/base/dto/create-base.dto';

@Controller('concept')
export class ConceptController {
  constructor(
    private readonly conceptService: ConceptService,
    private readonly baseService: BaseService,
  ) {}

  @UsePipes(
    new ValidationPipe({ whitelist: true, skipMissingProperties: true }),
  )
  @Post('/empty')
  async createEmpty(@Body() createBaseDto: CreateBaseDto) {
    await this.baseService.createEmpty(createBaseDto);
    return this.baseService.findAll();
  }

  @UsePipes(
    new ValidationPipe({ whitelist: true, skipMissingProperties: true }),
  )
  @Post()
  async createOnExist(@Body() createConceptDto: CreateConceptDto) {
    if (!Object.keys(createConceptDto).length) {
      throw new BadRequestException('Ошибка!');
    }
    await this.baseService.createOnExist(createConceptDto);
    this.conceptService.update(createConceptDto);
    return this.baseService.findAll();
  }

  @Get()
  findAll() {
    return this.conceptService.findAll();
  }
}
