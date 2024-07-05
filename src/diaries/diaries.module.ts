import { Module } from '@nestjs/common';
import { DiariesController } from './diaries.controller';
import { DiariesService } from './diaries.service';
import { EntriesModule } from './entries/entries.module';

@Module({
    controllers: [DiariesController],
    providers: [DiariesService],
    imports: [EntriesModule]
})
export class DiariesModule {}
