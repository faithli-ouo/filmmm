import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Query,
} from '@nestjs/common';
import { TrendingService } from './trending.service';
import { TrendingQueriesDTO, TrendingTypesDTO } from './dto/trending_dto';
import { TrendingActorsObject, TrendingGETResponseTypes, TrendingMoviesObject } from '@filmmm/types';

@Controller('trending')
export class TrendingController {
  constructor(private readonly trendingService: TrendingService) {}

  @Get('/:type')
  async getTrending(
    @Param() typesDTO:TrendingTypesDTO,
    @Query() trendingQueries: TrendingQueriesDTO
  ): Promise<TrendingGETResponseTypes> {

    const { type } = typesDTO
    
    const { page, timeWindow } = trendingQueries
    
    
    try {
      switch (type) {

        case 'movies':
          const moviesRes = await this.trendingService.getTrendingMovies(timeWindow, page)

          return moviesRes as TrendingMoviesObject;

        case 'actors':
          const actorsRes = await this.trendingService.getTrendingActors(timeWindow, page)

          return actorsRes as TrendingActorsObject;

      }
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Data not found',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }
}
