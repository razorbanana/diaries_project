import { Module } from '@nestjs/common';
import { RelationshipsService } from './relationships.service';
import { RelationshipsController } from './relationships.controller';
import { RelationshipsRepository } from 'src/repositories/relationships.repository';
import { DatabaseModule } from '../database/database.module';

@Module({
  controllers: [RelationshipsController],
  providers: [RelationshipsService, RelationshipsRepository],
})
export class RelationshipsModule {}
