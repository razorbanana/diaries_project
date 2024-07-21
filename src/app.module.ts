import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DiariesController } from './modules/diaries/diaries.controller';
import { DiariesService } from './modules/diaries/diaries.service';
import { DiariesModule } from './modules/diaries/diaries.module';
import { RouteEnum } from './common/enums/route.enum';
import { RouterModule } from '@nestjs/core';
import { DatabaseModule } from './modules/database/database.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { EntriesModule } from './modules/entries/entries.module';
import { LoggerModule } from './modules/logger/logger.module';
import { CommentsModule } from './modules/comments/comments.module';
import { RelationshipsModule } from './modules/relationships/relationships.module';
import { SubscriptionsModule } from './modules/subscriptions/subscriptions.module';

@Module({
  imports: [DiariesModule, RouterModule.register([{ path: `${RouteEnum.DIARIES}`, module: DiariesModule }]), 
  DatabaseModule, 
  UsersModule, RouterModule.register([{ path: `${RouteEnum.USERS}`, module: UsersModule }]), 
  AuthModule, RouterModule.register([{ path: `${RouteEnum.AUTH}`, module: AuthModule }]), 
  EntriesModule, RouterModule.register([{ path: `${RouteEnum.ENTRIES}`, module: EntriesModule }]), 
  LoggerModule, 
  CommentsModule, RouterModule.register([{ path: `${RouteEnum.COMMENTS}`, module: CommentsModule }]), 
  RelationshipsModule, RouterModule.register([{ path: `${RouteEnum.RELATIONSHIPS}`, module: RelationshipsModule }]), 
  SubscriptionsModule, RouterModule.register([{ path: `${RouteEnum.SUBSCRIPTIONS}`, module: SubscriptionsModule }])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
