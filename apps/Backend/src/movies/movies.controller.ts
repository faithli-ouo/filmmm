import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import {
  MoviesOtherDetailsTypeDTO,
  MovieTypesDTO,
} from 'src/movies/dto/movies_types_dto';
import {
  MovieDetailsObject,
  MoviesAlternativeTitles,
  MoviesCredits,
  MoviesDetailsOtherObject,
  MoviesImages,
  MoviesIncludedList,
  MoviesKeywords,
  MoviesLastest,
  MoviesRecomendations,
  MoviesReleaseDates,
  MoviesResultObject,
  MoviesReviews,
  MoviesSimilar,
  MoviesSocialId,
  MoviesTranslations,
  MoviesVideos,
  MoviesWatchProviders,
} from '@filmmm/types';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  async findAllMovies(
    @Query() movieTypesDTO: MovieTypesDTO,
  ): Promise<MoviesResultObject> {
    const { type, page } = movieTypesDTO;

    try {
      const res = await this.moviesService.getMovies(type, page);
      return res;
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

  @Get('/:id')
  async findMoviesOneById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<MovieDetailsObject> {
    try {
      const res = await this.moviesService.getMoviesDetailsByID(id);
      return res;
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

  @Get('/:id/:type')
  async findMoviesOtherById(
    @Param('id', ParseIntPipe) id: number,
    @Param('type') otherTypesDTO: MoviesOtherDetailsTypeDTO,
    @Query('page') page?: number,
  ): Promise<MoviesDetailsOtherObject> {
    try {
      const type = otherTypesDTO.type;

      switch (type) {
        case 'alternative_titles':
          const alternativeRitlesRes =
            await this.moviesService.getMoviesAlternativeTitlesByID(id);
          return alternativeRitlesRes as MoviesAlternativeTitles;

        case 'credits':
          const creditsRes = await this.moviesService.getMoviesCreditsByID(id);
          return creditsRes as MoviesCredits;

        case 'social_id':
          const socialIdRes =
            await this.moviesService.getMoviesSocialIDByID(id);
          return socialIdRes as MoviesSocialId;

        case 'images':
          const imagesRes = await this.moviesService.getMoviesImagesByID(id);
          return imagesRes as MoviesImages;

        case 'keywords':
          const keywordsRes =
            await this.moviesService.getMoviesKeywordsByID(id);
          return keywordsRes as MoviesKeywords;

        case 'inclued_list':
          const incluedListRes =
            await this.moviesService.getMoviesIncludedListsByID(id, page);
          return incluedListRes as MoviesIncludedList;

        case 'recommendations':
          const recommendationsRes =
            await this.moviesService.getMoviesRecommendationsByID(id);
          return recommendationsRes as MoviesRecomendations;

        case 'release_date':
          const releaseDateRes =
            await this.moviesService.getMoviesReleaseDatesByID(id);
          return releaseDateRes as MoviesReleaseDates;

        case 'reviews':
          const reviewsRes = await this.moviesService.getMoviesReviewsByID(id);
          return reviewsRes as MoviesReviews;

        case 'similar':
          const similarRes = await this.moviesService.getMoviesSimilarByID(
            id,
            page,
          );
          return similarRes as MoviesSimilar;

        case 'translations':
          const translationsRes =
            await this.moviesService.getMoviesTranslationByID(id);
          return translationsRes as MoviesTranslations;

        case 'videos':
          const videosRes = await this.moviesService.getMoviesVideosByID(id);
          return videosRes as MoviesVideos;

        case 'watch_provider':
          const watchProviderRes =
            await this.moviesService.getMoviesWatchProviderByID(id);
          return watchProviderRes as MoviesWatchProviders;

        case 'lastest':
          const lastestRes = await this.moviesService.getMoviesLastestByID(id);
          return lastestRes as MoviesLastest;
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
