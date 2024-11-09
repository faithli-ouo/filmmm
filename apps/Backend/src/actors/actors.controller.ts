import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { ActorOtherDetailsTypeDTO } from './dto/actors_types_dto';
import { ActorsService } from './actors.service';
import {
  ActorsCombinedCreditsObject,
  ActorsDetailsObject,
  ActorsImagesObject,
  ActorsLastestObject,
  ActorsMoviesCreditsObject,
  ActorsOthersObject,
  ActorsSocialIdObject,
  ActorsTranslationsObject,
  PopularActorsObject,
} from '@filmmm/types';

@Controller('actors')
export class ActorsController {
  constructor(private readonly actorsService: ActorsService) {}
  @Get('/popular')
  async getAllPopularActors(
    @Query('page') page: number,
  ): Promise<PopularActorsObject> {
    try {
      const res = await this.actorsService.getAllPopularActors(page);
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
  async getActorsDetails(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ActorsDetailsObject> {
    try {
      const res = await this.actorsService.getActorsDeatilsById(id);
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
  async getActorsOthersDetails(
    @Param() actorsTypesDTO: ActorOtherDetailsTypeDTO,
  ): Promise<ActorsOthersObject> {
    const { id, type } = actorsTypesDTO;

    try {
      switch (type) {
        case 'combined_credits':
          const combinedCreditsRes =
            await this.actorsService.getActorsCombinedCreditsById(id);

          return combinedCreditsRes as ActorsCombinedCreditsObject;

        case 'social_id':
          const socialIdRes =
            await this.actorsService.getActorsSocialIdById(id);

          return socialIdRes as ActorsSocialIdObject;

        case 'images':
          const imagesRes = await this.actorsService.getActorsImagesById(id);

          return imagesRes as ActorsImagesObject;

        case 'movie_credits':
          const movieCreditsRes =
            await this.actorsService.getActorsMovieCreditById(id);

          return movieCreditsRes as ActorsMoviesCreditsObject;

        case 'translations':
          const tranlastionsRes =
            await this.actorsService.getActorsTranslationsById(id);

          return tranlastionsRes as ActorsTranslationsObject;

        case 'lastest':
          const lastestRes = await this.actorsService.getActorsLastestById(id);

          return lastestRes as ActorsLastestObject;

        default:
          break;
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
