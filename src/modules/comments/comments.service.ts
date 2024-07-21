import { Injectable, Logger } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentsRepository } from '../../repositories/comments.repository';

@Injectable()
export class CommentsService {
  constructor(
    private commentsRepository: CommentsRepository
  ) {}

  private readonly logger = new Logger(CommentsService.name)
  
  async create(userId:number, createCommentDto: CreateCommentDto) {
    this.logger.log('Creating a new comment');
    const newComment = {
      ...createCommentDto,
      user: { connect: { id: userId } },
      entry: { connect: { id: createCommentDto.entryId } }
    }
    return this.commentsRepository.createComment({data: newComment});
  }

  async findAll() {
    this.logger.log('Fetching all comments');
    return this.commentsRepository.getComments({});
  }

  async findOne(id: number) {
    this.logger.log(`Fetching comment with id`);
    return this.commentsRepository.getComment({where: {id}});
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    this.logger.log(`Updating comment with id`);
    return this.commentsRepository.updateComment({where: {id}, data: updateCommentDto});
  }

  async remove(id: number) {
    this.logger.log(`Removing comment with id`);
    return this.commentsRepository.deleteComment({where: {id}});
  }
}
