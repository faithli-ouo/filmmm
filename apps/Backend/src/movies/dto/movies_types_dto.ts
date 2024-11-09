import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';
import { MovieList } from 'src/movies/movies.service';
import { MoviesDeatilsOtherTypes } from '@filmmm/types';


const allowedMovieTypes = ['now_playing', 'popular', 'top_rated', 'upcoming']
export class MovieTypesDTO {
  @IsNotEmpty({ message: 'Type must not be empty' }) // Ensure the field is not empty
  @IsIn(allowedMovieTypes, {
    message: `Type must be one of: ${allowedMovieTypes.join(',')}`,
  })
  type: MovieList;

  @IsOptional()
  page: string;
}

const allowedMooviesDetailsTypes = [
  'alternative_titles',
  'credits',
  'social_id',
  'images',
  'keywords',
  'inclued_list',
  'recommendations',
  'release_date',
  'reviews',
  'similar',
  'translations',
  'videos',
  'watch_provider',
  'lastest',
]
export class MoviesOtherDetailsTypeDTO {
  @IsIn(allowedMooviesDetailsTypes, {
    message: `Type must be one of: ${allowedMooviesDetailsTypes.join(',')}`,
  })
  type: MoviesDeatilsOtherTypes;
}