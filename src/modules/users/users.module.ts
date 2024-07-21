import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DatabaseModule } from 'src/modules/database/database.module';
import { DiariesModule } from 'src/modules/diaries/diaries.module';
import { JwtStrategy } from 'src/common/strategies/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { config } from 'dotenv';
import { UsersRepository } from '../../repositories/users.repository';
config();


@Module({
  controllers: [UsersController],
  providers: [UsersService, JwtStrategy, UsersRepository],
  imports: [ 
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRATION }
    })
  ],
  exports: [UsersService]
})
export class UsersModule {}
