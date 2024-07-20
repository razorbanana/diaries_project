import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { CommentsRepository } from './comments.repository';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [CommentsController],
  imports: [DatabaseModule],
  providers: [CommentsService, CommentsRepository],
})
export class CommentsModule {}
