import { Injectable, Logger } from '@nestjs/common';
import { CreateRelationshipDto } from './dto/create-relationship.dto';
import { UpdateRelationshipDto } from './dto/update-relationship.dto';
import { RelationshipsRepository } from 'src/repositories/relationships.repository';

@Injectable()
export class RelationshipsService {
  constructor(
    private relationshipsRepository: RelationshipsRepository
  ) {}

  private readonly logger = new Logger(RelationshipsService.name)

  create(userId: number, createRelationshipDto: CreateRelationshipDto) {
    this.logger.log('Creating a new relationship');
    const newRelation = {
      ...createRelationshipDto,
      user: { connect: { id: userId } },
      friend: { connect: { id: createRelationshipDto.friendId } }
    }
    return this.relationshipsRepository.createRelationship({data: newRelation});
  }

  findAll() {
    this.logger.log('Finding all relationships');
    return this.relationshipsRepository.getRelationships({});
  }

  findOne(id: number) {
    this.logger.log(`Finding relationship with id`);
    return this.relationshipsRepository.getRelationship({where: {id}});
  }

  update(id: number, updateRelationshipDto: UpdateRelationshipDto) {
    this.logger.log(`Updating relationship with id`);
    return this.relationshipsRepository.updateRelationship({where: {id}, data: updateRelationshipDto});
  }

  remove(id: number) {
    this.logger.log(`Removing relationship with id`);
    return this.relationshipsRepository.deleteRelationship({where: {id}});
  }
}
