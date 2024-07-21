import { Module } from '@nestjs/common';
import { EntriesController } from './entries.controller';
import { EntriesService } from './entries.service';
import { DatabaseModule } from 'src/modules/database/database.module';
import { EntriesRepository } from '../../repositories/entries.repository';

@Module({
  controllers: [EntriesController],
  providers: [EntriesService, EntriesRepository],
  exports: [EntriesService]
})
export class EntriesModule {}
