import { Module } from '@nestjs/common';
import { DiariesController } from './diaries.controller';
import { DiariesService } from './diaries.service';
import { EntriesModule } from '../entries/entries.module';
import { RouterModule } from '@nestjs/core';
import { RouteEnum } from '../common/enums/route.enum';
import { DatabaseModule } from 'src/database/database.module';
import { JwtStrategy } from 'src/common/strategies/jwt.strategy';

@Module({
    imports: [DatabaseModule, EntriesModule],
    controllers: [DiariesController],
    providers: [DiariesService, JwtStrategy],
    exports: [DiariesService]
})
export class DiariesModule {}
