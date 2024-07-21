import { Injectable, Logger } from '@nestjs/common';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import { SubscriptionsRepository } from 'src/repositories/subscriptions.repository';

@Injectable()
export class SubscriptionsService {

  constructor(
    private subscriptionsRepository: SubscriptionsRepository
  ) {}

  private readonly logger = new Logger(SubscriptionsService.name)

  create(userId:number, createSubscriptionDto: CreateSubscriptionDto) {
    this.logger.log('Creating a new subscription');
    const newSubscription = {
      user: { connect: { id: userId } },
      diary: { connect: { id: createSubscriptionDto.diaryId } }
    }
    return this.subscriptionsRepository.createSubscription({data: newSubscription});
  }

  findAll() {
    this.logger.log('Retrieving all subscriptions');
    return this.subscriptionsRepository.getSubscriptions({});
  }

  findOne(id: number) {
    this.logger.log(`Retrieving subscription with id ${id}`);
    return this.subscriptionsRepository.getSubscription({where: {id}}); 
  }

  remove(id: number) {
    this.logger.log(`Removing subscription with id ${id}`);
    return this.subscriptionsRepository.deleteSubscription({where: {id}});
  }
}
