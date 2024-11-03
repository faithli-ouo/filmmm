export type ActorsOthersObject =
  | ActorsCombinedCreditsObject
  | ActorsSocialIdObject
  | ActorsImagesObject
  | ActorsMoviesCreditsObject
  | ActorsTranslationsObject
  | ActorsLastestObject;

export interface ActorsCombinedCreditsObject {
  cast:
    | Array<{
        adult: boolean;
        backdrop_path: string;
        genre_ids: number[];
        id: number;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
        release_date: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
        character: string;
        credit_id: string;
        order: number;
        media_type: string;
      }>
    | Array<null>;
}

export interface ActorsSocialIdObject {
  id: number;
  freebase_mid: string;
  freebase_id: null;
  imdb_id: string;
  tvrage_id: null;
  wikidata_id: string;
  facebook_id: string;
  instagram_id: string;
  tiktok_id: null;
  twitter_id: null;
  youtube_id: null;
}

export interface ActorsImagesObject {
  id: number;
  profiles:
    | Array<{
        aspect_ratio: number;
        height: number;
        iso_639_1: null;
        file_path: string;
        vote_average: number;
        vote_count: number;
        width: number;
      }>
    | Array<null>;
}

export interface ActorsMoviesCreditsObject {
  cast:
    | Array<{
        adult: boolean;
        backdrop_path: string;
        genre_ids: number[];
        id: number;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
        release_date: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
        character: string;
        credit_id: string;
        order: number;
      }>
    | Array<null>;
}

export interface ActorsTranslationsObject {
  id: number;
  translations:
    | Array<{
        iso_3166_1: string;
        iso_639_1: string;
        name: string;
        english_name: string;
        data: {
          biography: string;
        } | null;
      }>
    | Array<null>;
}

export interface ActorsLastestObject {
  adult: boolean;
  also_known_as: Array<any>;
  biography: string;
  birthday: string | null;
  deathday: string | null;
  gender: number;
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  known_for_department: string;
  name: string;
  place_of_birth: string | null;
  popularity: number;
  profile_path: string | null;
}
