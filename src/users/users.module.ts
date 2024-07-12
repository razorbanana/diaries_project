import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthModule } from '../auth/auth.module';
import { DatabaseModule } from 'src/database/database.module';
import { RouteEnum } from 'src/common/enums/route.enum';
import { RouterModule } from '@nestjs/core';
import { DiariesModule } from 'src/diaries/diaries.module';
import { JwtStrategy } from 'src/common/strategies/jwt.strategy';

@Module({
  controllers: [UsersController],
  providers: [UsersService, JwtStrategy],
  imports: [DatabaseModule, DiariesModule],
  exports: [UsersService]
})
export class UsersModule {}
