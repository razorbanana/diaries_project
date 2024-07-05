import { CreateDiaryEntryDto } from './create-entry.dto';
import {PartialType} from '@nestjs/mapped-types';

export class UpdateDiaryEntryDto extends PartialType(CreateDiaryEntryDto) {
}