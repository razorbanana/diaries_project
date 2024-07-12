import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { DatabaseModule } from 'src/database/database.module';
import { PassportModule } from '@nestjs/passport';

import { config } from 'dotenv';
import { LocalStrategy } from 'src/common/strategies/local.strategy';
import { JwtStrategy } from 'src/common/strategies/jwt.strategy';
config();

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRATION },
    }),
    DatabaseModule
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
