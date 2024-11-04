export type SearchTypes =
  | 'collection'
  | 'movie'
  | 'actor'
  | 'company'
  | 'keyword';

export type SearchGETResponseTypes =
  | SearchCollectionObject
  | SearchMovieObject
  | SearchActorObject
  | SearchCompanyObject
  | SearchKeywordObject;

interface Collection {
  adult: boolean;
  backdrop_path: string | null;
  id: number;
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string | null;
}

export type SearchCollectionObject = {
  page: number;
  results: Collection[] | [];
  total_pages: number;
  total_results: number;
};

interface Movie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export type SearchMovieObject = {
  page: number;
  results: Movie[] | [];
  total_pages: number;
  total_results: number;
};

interface KnownFor {
  backdrop_path: string | null;
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
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

interface Actor {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  known_for: KnownFor[];
}

export type SearchActorObject = {
  page: number;
  results: Actor[] | [];
  total_pages: number;
  total_results: number;
};

interface ProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

export type SearchCompanyObject = {
  page: number;
  results: ProductionCompany[];
  total_pages: number;
  total_results: number;
};

interface Keyword {
  id: number;
  name: string;
}

export type SearchKeywordObject = {
  page: number;
  results: Keyword[];
  total_pages: number;
  total_results: number;
};
