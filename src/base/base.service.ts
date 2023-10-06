import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBaseDto } from './dto/create-base.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Base } from './entities/base.entity';
import { Repository } from 'typeorm';
import { UpdateConceptDto } from 'src/concept/dto/update-concept.dto';

@Injectable()
export class BaseService {
  constructor(
    @InjectRepository(Base) private readonly baseRepository: Repository<Base>,
  ) {}
  findAll() {
    return this.baseRepository.find();
  }

  createEmpty(createBaseDto: CreateBaseDto) {
    const newBase = this.baseRepository.create(createBaseDto);
    return this.baseRepository.save(newBase);
  }

  async createOnExist(updateConceptModel: UpdateConceptDto) {
    const newRule: CreateBaseDto = {
      rule: '',
    };
    if (updateConceptModel) {
      if (updateConceptModel.order) {
        newRule.rule = `ЕСЛИ З(отсутствует) И ~С(З,Р) ТО З(${updateConceptModel.order}) И С(З,Р)`;
        updateConceptModel.s = true;
      } else if (updateConceptModel.platform) {
        newRule.rule = `ЕСЛИ П(отсутствует) И ~СП(З,Р) ТО П(${updateConceptModel.platform}) И СП(З,Р)`;
        updateConceptModel.sp = true;
      } else if (updateConceptModel.developer) {
        newRule.rule = `ЕСЛИ Р(неактивен) ТО Р(${updateConceptModel.developer})`;
      } else if (updateConceptModel.language) {
        newRule.rule = `ЕСЛИ ЯП(не выбран) И ~В(Р, ЯП) ТО ЯП(${updateConceptModel.language}) И В(Р, ЯП)`;
        updateConceptModel.v = true;
      } else if (updateConceptModel.os) {
        newRule.rule = `ЕСЛИ ОС(не определена) И ~Т(З,ОС) ТО ОС(${updateConceptModel.os}) И Т(З,ОС)`;
      } else if (updateConceptModel.framework) {
        newRule.rule = `ЕСЛИ ФР(не выбран) И ~О(Р,ФР) ТО ФР(${updateConceptModel.framework}) И О(Р,ФР)`;
      } else if (updateConceptModel.interface) {
        newRule.rule = `ЕСЛИ И(отсутствует) И ~ПИ(Р,И) И ~ИС(Р,И) ТО И(${updateConceptModel.interface}) И ПИ(Р,И) И ИС(Р,И)`;
      } else if (updateConceptModel.db) {
        newRule.rule = `ЕСЛИ БД(отсутствует) И ~ПБД(Р,БД) И ~СБД(Р,БД) ТО БД(${updateConceptModel.db}) И ПБД(Р,БД) И СБД(Р,БД)`;
      } else {
        throw new BadRequestException('Ошибка');
      }
    }
    const newBase = this.baseRepository.create(newRule);
    this.baseRepository.save(newBase);
    return newBase;
  }

  findOne(id: number) {
    return `This action returns a #${id} base`;
  }

  remove(id: number) {
    return `This action removes a #${id} base`;
  }
}
