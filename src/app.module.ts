import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DiariesController } from './diaries/diaries.controller';
import { DiariesService } from './diaries/diaries.service';
import { DiariesModule } from './diaries/diaries.module';
import { RouteEnum } from './common/enums/route.enum';
import { RouterModule } from '@nestjs/core';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { EntriesModule } from './entries/entries.module';
import { LoggerModule } from './logger/logger.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [DiariesModule, RouterModule.register([{ path: `${RouteEnum.DIARIES}`, module: DiariesModule }]), 
  DatabaseModule, 
  UsersModule, RouterModule.register([{ path: `${RouteEnum.USERS}`, module: UsersModule }]), 
  AuthModule, RouterModule.register([{ path: `${RouteEnum.AUTH}`, module: AuthModule }]), 
  EntriesModule, RouterModule.register([{ path: `${RouteEnum.ENTRIES}`, module: EntriesModule }]), 
  LoggerModule, 
  CommentsModule, RouterModule.register([{ path: `${RouteEnum.COMMENTS}`, module: CommentsModule }])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
