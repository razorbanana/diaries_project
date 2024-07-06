import { Module } from '@nestjs/common';
import { DiariesController } from './diaries.controller';
import { DiariesService } from './diaries.service';
import { EntriesModule } from './entries/entries.module';
import { RouterModule } from '@nestjs/core';
import { RouteEnum } from '../common/enums/route.enum';

@Module({
    imports: [EntriesModule, RouterModule.register([{ path: `${RouteEnum.DIARIES}/${RouteEnum.ENTRIES}`, module: EntriesModule }])],
    controllers: [DiariesController],
    providers: [DiariesService]
    
})
export class DiariesModule {}
