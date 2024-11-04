export type TrendingTypes = 'movies' | 'actors';

export type TrendingTimeWindow = 'day' | 'week';

export type TrendingGETResponseTypes = TrendingActorsObject | TrendingMoviesObject;

interface TrendingMoviesResult {
    backdrop_path: string;
    id: number;
    title: string;
    original_title: string;
    overview: string;
    poster_path: string;
    media_type: string;
    adult: boolean;
    original_language: string;
    genre_ids: number[];
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }

  interface TrendingActorsResult {
  id: number;
  name: string;
  original_name: string;
  media_type: string;
  adult: boolean;
  popularity: number;
  gender: number;
  known_for_department: string;
  profile_path: string;
}

export type TrendingActorsObject =  {
  page: number;
  results: TrendingActorsResult[] | [];
  total_pages: number;
  total_results: number;
}

  export type TrendingMoviesObject = {
    page: number;
    results: TrendingMoviesResult[] | [];
    total_pages: number;
    total_results: number;
  }
  