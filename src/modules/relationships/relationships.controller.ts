import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { RelationshipsService } from './relationships.service';
import { CreateRelationshipDto } from './dto/create-relationship.dto';
import { UpdateRelationshipDto } from './dto/update-relationship.dto';
import { JwtAuthGuard } from 'src/common/guards/jwt.guard';
import { ApiBody } from '@nestjs/swagger';
import { UserWithoutPassword } from 'src/common/types/user.type';

@Controller()
@UseGuards(JwtAuthGuard)
export class RelationshipsController {
  constructor(private readonly relationshipsService: RelationshipsService) {}

  @Post()
  @ApiBody({ type: [CreateRelationshipDto] })
  create(@Req() req: Request & { user: UserWithoutPassword }, @Body() createRelationshipDto: CreateRelationshipDto) {
    return this.relationshipsService.create(req.user.id, createRelationshipDto);
  }

  @Get()
  findAll() {
    return this.relationshipsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.relationshipsService.findOne(+id);
  }

  @Patch(':id')
  @ApiBody({ type: [UpdateRelationshipDto] })
  update(@Param('id') id: string, @Body() updateRelationshipDto: UpdateRelationshipDto) {
    return this.relationshipsService.update(+id, updateRelationshipDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.relationshipsService.remove(+id);
  }
}
