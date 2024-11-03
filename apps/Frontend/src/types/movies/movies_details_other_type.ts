export type MoviesDeatilsOtherTypes = 
  | 'alternative_titles'
  | 'credits'
  | 'social_id'
  | 'images'
  | 'keywords'
  | 'inclued_list'
  | 'recommendations'
  | 'release_date'
  | 'reviews'
  | 'similar'
  | 'translations'
  | 'videos'
  | 'watch_provider'
  | 'lastest'; 

export type MoviesDetailsOtherObject =
  | MoviesAlternativeTitles
  | MoviesCredits
  | MoviesSocialId
  | MoviesImages
  | MoviesKeywords
  | MoviesIncludedList
  | MoviesRecomendations
  | MoviesReleaseDates
  | MoviesReviews
  | MoviesSimilar
  | MoviesTranslations
  | MoviesVideos
  | MoviesWatchProviders
  | MoviesLastest;

export interface MoviesAlternativeTitles {
  id: number;
  titles: Array<
    | {
        iso_3166_1: string;
        title: string;
        type: string;
      }
    | []
  >;
}

export interface MoviesCredits {
  id: number;
  cast:
    | Array<{
        adult: boolean;
        gender: number;
        id: number;
        known_for_department: string;
        name: string;
        original_name: string;
        popularity: number;
        profile_path: string;
        cast_id: number;
        character: string;
        credit_id: string;
        order: number;
      }>
    | [];
}

export interface MoviesSocialId {
  imdb_id: string;
  wikidata_id: string;
  facebook_id: string;
  instagram_id: string;
  twitter_id: string;
  [key: string]: string | undefined;
}

export interface MoviesImages {
  backdrops:
    | Array<{
        aspect_ratio: number;
        height: number;
        iso_639_1: string | null;
        file_path: string;
        vote_average: number;
        vote_count: number;
      }>
    | [];
}

export interface MoviesKeywords {
  id: number;
  keywords:
    | Array<{
        id: number;
        name: string;
      }>
    | [];
}

export interface MoviesIncludedList {
  id: number;
  page: number;
  results:
    | Array<{
        description: string;
        favorite_count: number;
        id: number;
        item_count: number;
        iso_639_1: string;
        iso_3166_1: string;
        list_type: string;
        name: string;
        poster_path: string | null;
      }>
    | [];
    total_pages: number;
    total_results: number;
}

export interface MoviesRecomendations {
  page: number;
  results:
    | Array<{
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
      }>
    | [];
    total_pages: number;
    total_results: number;
}

export interface MoviesReleaseDates {
  id: number;
  page: number;
  results:
    | Array<{
        iso_3166_1: string;
        release_dates:
          | Array<{
              certification: string;
              descriptors: string[];
              iso_639_1: string;
              note: string;
              release_date: string;
              type: number;
            }>
          | [];
      }>
    | [];
    total_pages: number;
    total_results: number;
}

export interface MoviesReviews {
  id: number;
  page: number;
  results:
    | Array<{
        author: string;
        author_details: {
          name: string;
          username: string;
          avatar_path: string;
          rating: number;
        } | null;
        content: string;
        created_at: string;
        id: string;
        updated_at: string;
        url: string;
      }>
    | [];
    total_pages: number;
    total_results: number;
}

export interface MoviesSimilar {
  page: number;
  results:
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
      }>
    | [];
    total_pages: number;
    total_results: number;
}

export interface MoviesTranslations {
  id: number;
  translations:
    | Array<{
        iso_3166_1: string;
        iso_639_1: string;
        name: string;
        english_name: string;
        data: {
          homepage: string;
          overview: string;
          runtime: number;
          tagline: string;
          title: string;
        } | null;
      }>
    | [];
}

export interface MoviesVideos {
  id: number;
  results:
    | Array<{
        iso_639_1: string;
        iso_3166_1: string;
        name: string;
        key: string;
        site: string;
        size: number;
        type: string;
        official: boolean;
        published_at: string;
        id: string;
      }>
    | [];
}

export interface MoviesWatchProviders {
  id: number;
  results: {
    [locale: string]: {
      link: string;
      flatrate?: Provider[];
      rent?: Provider[];
      buy?: Provider[];
    };
  };
}

interface Provider {
  logo_path: string;
  provider_id: number;
  provider_name: string;
  display_priority: number;
}

export interface MoviesLastest {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: object | null;
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: {
    id: number;
    name: string;
    logo_path?: string;
    country?: string;
  }[];
  production_countries: { iso_3166_1: string; name: string }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: { iso_639_1: string; name: string }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
