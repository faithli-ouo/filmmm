import {  Injectable } from '@nestjs/common';
import {
  MoviesAlternativeTitles,
  MoviesCredits,
  MoviesImages,
  MoviesIncludedList,
  MoviesKeywords,
  MoviesLastest,
  MoviesRecomendations,
  MoviesReleaseDates,
  MoviesReviews,
  MoviesSimilar,
  MoviesSocialId,
  MoviesTranslations,
  MoviesVideos,
  MoviesWatchProviders,
  MovieDetailsObject,
  MoviesResultObject
} from '@filmmm/types';


export type MovieList = 'now_playing' | 'popular' | 'top_rated' | 'upcoming';

@Injectable()
export class MoviesService {

  private readonly originUrl = 'https://api.themoviedb.org/3/movie/';
  private readonly language = process.env.TMDB_language;
  private readonly region = process.env.TMDB_region;
  private readonly options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: process.env.TMDB_Token,
      },
    }
  
  
  //Get Movielist by defined types: "now_playing" | "popular" | "top_rated" | "upcoming"
  async getMovies(type: MovieList, page: string): Promise<MoviesResultObject> {
    console.log(page);
    
    const url = `${this.originUrl}${type}?language=${this.language}&region=${this.region}&page=${page}`;
    const res = await fetch(url, this.options)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
      
    return res;
  }

  //Get Movie Details by defined id
  async getMoviesDetailsByID(id: number): Promise<MovieDetailsObject> {
    const url = `${this.originUrl}${id}?language=${this.language}`;

    const res = await fetch(url, this.options)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });

    return res;
  }

  //Get Movie Alternative Titles by deifned id
  async getMoviesAlternativeTitlesByID(
    id: number,
  ): Promise<MoviesAlternativeTitles> {
    const url = `${this.originUrl}${id}/alternative_titles?language=${this.language}&region=${this.region}`;

    const res = await fetch(url, this.options)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });

    return res;
  }

  //Get Movie Credits by deifned id
  async getMoviesCreditsByID(id: number): Promise<MoviesCredits> {
    const url = `${this.originUrl}${id}/credits?language=${this.language}&region=${this.region}`;

    const res = await fetch(url, this.options)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });

    return res;
  }

  //Get Movie Social ID by deifned id
  async getMoviesSocialIDByID(id: number): Promise<MoviesSocialId> {
    const url = `${this.originUrl}${id}/external_ids?language=${this.language}&region=${this.region}`;

    const res = await fetch(url, this.options)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });

    return res;
  }

  //Get Movie Images by deifned id
  async getMoviesImagesByID(id: number): Promise<MoviesImages> {
    const url = `${this.originUrl}${id}/images`;


    const res = await fetch(url, this.options)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });

    return res;
  }

  //Get Movie Keywords by deifned id
  async getMoviesKeywordsByID(id: number): Promise<MoviesKeywords> {
    const url = `${this.originUrl}${id}/keywords`;

    const res = await fetch(url, this.options)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });

    return res;
  }

  //Get Movie Inclueded List by deifned id
  async getMoviesIncludedListsByID(
    id: number,
    page = 1,
  ): Promise<MoviesIncludedList> {
    const url = `${this.originUrl}${id}/lists?page=${page}`;

    const res = await fetch(url, this.options)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });

    return res;
  }

  //Get Movie Recommendations by deifned id
  async getMoviesRecommendationsByID(
    id: number,
    page = 1,
  ): Promise<MoviesRecomendations> {
    const url = `${this.originUrl}${id}/recommendations?language=${this.language}&region=${this.region}&page=${page}`;

    const res = await fetch(url, this.options)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });

    return res;
  }

  //Get Movie Release Dates by deifned id
  async getMoviesReleaseDatesByID(
    id: number,
    page = 1,
  ): Promise<MoviesReleaseDates> {
    const url = `${this.originUrl}${id}/release_dates?language=${this.language}&region=${this.region}&page=${page}`;

    const res = await fetch(url, this.options)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });

    return res;
  }

  //Get Movie Reviews by deifned id
  async getMoviesReviewsByID(id: number, page = 1): Promise<MoviesReviews> {
    const url = `${this.originUrl}${id}/reviews?language=${this.language}&region=${this.region}&page=${page}`;

    const res = await fetch(url, this.options)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });

    return res;
  }

  //Get Similar Movie by deifned id
  async getMoviesSimilarByID(id: number, page = 1): Promise<MoviesSimilar> {
    const url = `${this.originUrl}${id}/similar?language=${this.language}&region=${this.region}&page=${page}`;

    const res = await fetch(url, this.options)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });

    return res;
  }

  //Get Movie Translation Description by deifned id
  async getMoviesTranslationByID(id: number): Promise<MoviesTranslations> {
    const url = `${this.originUrl}${id}/translations?language=${this.language}&region=${this.region}`;

    const res = await fetch(url, this.options)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });

    return res;
  }

  //Get Movie Videos by deifned id
  async getMoviesVideosByID(id: number): Promise<MoviesVideos> {
    const url = `${this.originUrl}${id}/videos?language=${this.language}&region=${this.region}`;

    const res = await fetch(url, this.options)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });

    return res;
  }

  //Get Movie Watch Providers by deifned id
  async getMoviesWatchProviderByID(id: number): Promise<MoviesWatchProviders> {
    const url = `${this.originUrl}${id}/providers?language=${this.language}&region=${this.region}`;

    const res = await fetch(url, this.options)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });

    return res;
  }

  //Get Movie Lastest by deifned id
  async getMoviesLastestByID(id: number): Promise<MoviesLastest> {
    const url = `${this.originUrl}${id}/latest?language=${this.language}&region=${this.region}`;

    const res = await fetch(url, this.options)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });

    return res;
  }
}
