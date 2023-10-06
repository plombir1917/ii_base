import { Module } from '@nestjs/common';
import { ConceptService } from './concept.service';
import { ConceptController } from './concept.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Concept } from './entities/concept.entity';
import { BaseModule } from 'src/base/base.module';

@Module({
  imports: [TypeOrmModule.forFeature([Concept]), BaseModule],
  controllers: [ConceptController],
  providers: [ConceptService],
  exports: [ConceptService],
})
export class ConceptModule {}
