import { Module } from '@nestjs/common';
import { EntriesController } from './entries.controller';
import { EntriesService } from './entries.service';
import { DatabaseModule } from 'src/database/database.module';
import { EntriesRepository } from './entries.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [EntriesController],
  providers: [EntriesService, EntriesRepository],
  exports: [EntriesService]
})
export class EntriesModule {}
