interface KnownFor {
  backdrop_path: string;
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  adult: boolean;
  original_language: string;
  genre_ids: number[] | [];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface Result {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  known_for: KnownFor[] | [];
}

export type PopularActorsObject = {
  page: number;
  result: Result[] | [];
};

export type ActorsDetailsServiceTypes =
  | 'combined_credits'
  | 'social_id'
  | 'images'
  | 'movie_credits'
  | 'translations'
  | 'lastest';

export type ActorsDetailsObject = {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday: string;
  gender: 0 | 1 | 2 | null;
  homepage: string;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
};
