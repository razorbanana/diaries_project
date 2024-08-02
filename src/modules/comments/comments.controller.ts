import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { ApiBody } from '@nestjs/swagger';
import { UserWithoutPassword } from 'src/common/types/user.type';
import { JwtAuthGuard } from 'src/common/guards/jwt.guard';

@Controller()
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  @ApiBody({ type: [CreateCommentDto] })
  create(@Req() req: Request & { user: UserWithoutPassword }, @Body() createCommentDto: CreateCommentDto) {
    return this.commentsService.create(req.user.id, createCommentDto);
  }

  @Get()
  findAll() {
    return this.commentsService.findAll();
  }

  @Get('single/:id')
  findOne(@Param('id') id: string) {
    return this.commentsService.findOne(+id);
  }
  
  @Get(':id')
  findMany(@Param('id') id: string) {
    console.log("We are fetching")
    return this.commentsService.findMany(+id);
  }

  @Patch(':id')
  @ApiBody({ type: [UpdateCommentDto] })
  update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentsService.update(+id, updateCommentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentsService.remove(+id);
  }
}
