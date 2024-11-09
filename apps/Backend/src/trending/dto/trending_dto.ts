import { Transform } from "class-transformer";
import { IsIn, IsNumber, IsOptional } from "class-validator";
import { TrendingTypes } from "@filmmm/types";


const allowedTrendingTypes = ['movies', 'actors']

export class TrendingTypesDTO {
  @IsIn(allowedTrendingTypes, { message: `Type must be one of: ${allowedTrendingTypes.join(', ')}`})
  type: TrendingTypes = 'movies'
}

const allowedTimeWindow = ['day', 'week']
export class TrendingQueriesDTO {

  @IsOptional()
  @IsIn(allowedTimeWindow , { message: `Type must be one of: ${allowedTimeWindow.join(', ')}`})
  timeWindow?: string = 'day'

  @IsOptional()
  @Transform(({value}) => Number(value))
  @IsNumber()
  page?: number = 1;
}