import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Query,
} from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchParamDTO, SearchQueryDTO } from './dto/search.dto';
import {
  SearchActorObject,
  SearchCollectionObject,
  SearchCompanyObject,
  SearchGETResponseTypes,
  SearchKeywordObject,
  SearchMovieObject,
} from '@filmmm/types';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get('/:type')
  async getSearch(
    @Param() paramDTO: SearchParamDTO,
    @Query() queryDTO: SearchQueryDTO,
  ): Promise<SearchGETResponseTypes> {
    const { type } = paramDTO;
    const { query, include_adult, year, page } = queryDTO;
    

    try {
      switch (type) {
        case 'collection':
          const collectionRes = await this.searchService.getSearchCollection(
            query,
            include_adult,
            page,
          );
          return collectionRes as SearchCollectionObject;

        case 'movie':
          const movieRes = await this.searchService.getSearchMovie(
            query,
            include_adult,
            page,
            year,
          );

          return movieRes as SearchMovieObject;

        case 'actor':
          const actorRes = await this.searchService.getSearchActor(
            query,
            include_adult,
            page,
          );
          return actorRes as SearchActorObject;

        case 'company':
          const companyRes = await this.searchService.getSearchCompany(
            query,
            page,
          );
          return companyRes as SearchCompanyObject;

        case 'keyword':
          const keywordRes = await this.searchService.getSearchKeyword(
            query,
            page,
          );
          return keywordRes as SearchKeywordObject;
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
