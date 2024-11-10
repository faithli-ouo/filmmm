import { TrendingActorsObject, TrendingMoviesObject } from "@filmmm/types";
import TMDBFetchHandle from "../tmdb/fetch.service";

export class TrendingService {
  private readonly originUrl = "https://api.themoviedb.org/3/trending/";
  private readonly language = process.env.TMDB_language!;
  private readonly region = process.env.TMDB_region!;
  private readonly options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.TMDB_Token!,
    },
  };

  async getTrendingMovies(
    timeWindow = "week",
    page = 1
  ): Promise<TrendingMoviesObject> {
    const url = `${this.originUrl}movie/${timeWindow}?language=${this.language}&page=${page}`;

    return await TMDBFetchHandle<TrendingMoviesObject>(url, this.options);
  }

  async getTrendingActors(
    timeWindow = "week",
    page = 1
  ): Promise<TrendingActorsObject> {
    const url = `${this.originUrl}person/${timeWindow}?language=${this.language}&page=${page}`;

    return await TMDBFetchHandle<TrendingActorsObject>(url, this.options);
  }
}
