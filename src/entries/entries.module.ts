import { Module } from '@nestjs/common';
import { EntriesController } from './entries.controller';
import { EntriesService } from './entries.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [EntriesController],
  providers: [EntriesService],
  exports: [EntriesService]
})
export class EntriesModule {}
