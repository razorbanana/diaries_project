import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [DatabaseModule, AuthModule]
})
export class UsersModule {}
