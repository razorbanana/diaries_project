import { Module } from '@nestjs/common';
import { DiariesController } from './diaries.controller';
import { DiariesService } from './diaries.service';
import { EntriesModule } from '../entries/entries.module';
import { DatabaseModule } from 'src/modules/database/database.module';
import { JwtStrategy } from 'src/common/strategies/jwt.strategy';
import { DiariesRepository } from '../../repositories/diaries.repository';
import { EntriesRepository } from 'src/repositories/entries.repository';
import { AccessStrategy } from 'src/common/strategies/access.strategy';

@Module({
    controllers: [DiariesController],
    providers: [DiariesService, JwtStrategy, AccessStrategy, DiariesRepository, EntriesRepository],
    exports: [DiariesService]
})
export class DiariesModule {}
