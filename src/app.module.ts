import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DiariesController } from './diaries/diaries.controller';
import { DiariesService } from './diaries/diaries.service';
import { DiariesModule } from './diaries/diaries.module';

@Module({
  imports: [DiariesModule],
  controllers: [AppController, DiariesController],
  providers: [AppService, DiariesService],
})
export class AppModule {}
