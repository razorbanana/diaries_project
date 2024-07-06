import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DiariesController } from './diaries/diaries.controller';
import { DiariesService } from './diaries/diaries.service';
import { DiariesModule } from './diaries/diaries.module';
import { RouteEnum } from './common/enums/route.enum';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [DiariesModule, RouterModule.register([{ path: `${RouteEnum.DIARIES}`, module: DiariesModule }])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
