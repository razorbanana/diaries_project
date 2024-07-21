export class CreateRelationshipDto {
    friendId: number;
    status: 'NEUTRAL' | 'SUBSCRIBED' | 'BLOCKED';
}
