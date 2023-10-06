import { Injectable } from '@nestjs/common';
import { UpdateConceptDto } from './dto/update-concept.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Concept } from './entities/concept.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ConceptService {
  constructor(
    @InjectRepository(Concept)
    private conceptRepository: Repository<Concept>,
  ) {}
  update(updateConceptDto: UpdateConceptDto) {
    const first = this.conceptRepository.update(1, updateConceptDto);
    return first;
  }
  findAll() {
    return this.conceptRepository.find();
  }
}
