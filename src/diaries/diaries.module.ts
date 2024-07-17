import { Module } from '@nestjs/common';
import { DiariesController } from './diaries.controller';
import { DiariesService } from './diaries.service';
import { EntriesModule } from '../entries/entries.module';
import { DatabaseModule } from 'src/database/database.module';
import { JwtStrategy } from 'src/common/strategies/jwt.strategy';
import { DiariesRepository } from './diaries.repository';
import { EntriesRepository } from 'src/entries/entries.repository';
import { AccessStrategy } from 'src/common/strategies/access.strategy';

@Module({
    imports: [DatabaseModule, EntriesModule],
    controllers: [DiariesController],
    providers: [DiariesService, JwtStrategy, AccessStrategy, DiariesRepository, EntriesRepository],
    exports: [DiariesService]
})
export class DiariesModule {}
