import { Injectable } from '@nestjs/common';
import { TrendingActorsObject, TrendingMoviesObject } from '@filmmm/types';

@Injectable()
export class TrendingService {
    private readonly originUrl = 'https://api.themoviedb.org/3/trending/';
    private readonly language = process.env.TMDB_language;
    private readonly region = process.env.TMDB_region;
    private readonly options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: process.env.TMDB_Token,
        },
      };

    async getTrendingMovies(timeWindow = "week", page = 1): Promise<TrendingMoviesObject> {
        const url = `${this.originUrl}movie/${timeWindow}?language=${this.language}&page=${page}`;

        const res = await fetch(url, this.options)
        .then((res) => res.json())
        .catch((err) => console.log(err))

        return res;
        
    };

    async getTrendingActors(timeWindow = "week", page = 1): Promise<TrendingActorsObject> {
        const url = `${this.originUrl}person/${timeWindow}?language=${this.language}&page=${page}`;

        const res = await fetch(url, this.options)
        .then((res) => res.json())
        .catch((err) => console.log(err))

        return res;
        
    };
};
