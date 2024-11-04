import { Transform } from 'class-transformer';
import { IsIn, IsNotEmpty } from 'class-validator';

const allowedTypes = [
  'combined_credits',
  'social_id',
  'images',
  'movie_credits',
  'translations',
  'lastest',
];

export class ActorOtherDetailsTypeDTO {
  @IsNotEmpty()
  @Transform( ({value}) => Number(value))
  id:number

  @IsIn(allowedTypes, {
    message: `Type must be one of: ${allowedTypes.join(', ')}`,
  })
  type: string;
}
