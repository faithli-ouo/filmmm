import { TMDBError } from "../error/error.types";

export type MovieDetailsObject = {
    status_message: unknown;
    success: string;
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: null | Collection;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: string;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompany[];
    production_countries: Country[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguages[];
    status: Status;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  };
  
  interface Collection {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }
  
  interface Genre {
    id: number;
    name: string;
  }
  
  interface Country {
    iso_3166_1: string;
    name: string;
  }
  
  interface Status {
    status: 'Released' | 'In Development';
  }
  
  interface SpokenLanguages {
    english_name: string;
    iso_639_1: string;
    name: string;
  }
  
  interface ProductionCompany {
    id: number;
    logo_path: string | null;
    name: string;
    country: Country;
  }