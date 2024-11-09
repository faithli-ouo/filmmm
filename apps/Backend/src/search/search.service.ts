import { Injectable } from '@nestjs/common';
import {
  SearchActorObject,
  SearchCollectionObject,
  SearchCompanyObject,
  SearchKeywordObject,
  SearchMovieObject,
} from '@filmmm/types';

@Injectable()
export class SearchService {
  private readonly originUrl = 'https://api.themoviedb.org/3/search/';
  private readonly language = process.env.TMDB_language;
  private readonly region = process.env.TMDB_region;
  private readonly options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: process.env.TMDB_Token,
    },
  };

  async getSearchCollection(
    query: string,
    include_adult: boolean,
    page: number,
  ): Promise<SearchCollectionObject> {
    const url = `${this.originUrl}collection?query=${query}&include_adult=${include_adult}&language=${this.language}&page=${page}`;

    const res = await fetch(url, this.options)
      .then((res) => res.json())
      .catch((err) => console.log(err));
      

    return res;
  }

  async getSearchMovie(
    query: string,
    include_adult: boolean,
    page: number,
    year?: number,
  ): Promise<SearchMovieObject> {
    const url = `${this.originUrl}movie?query=${query}&include_adult=${include_adult}&language=${this.language}&page=${page}&year=${year}`;

    const res = await fetch(url, this.options)
      .then((res) => res.json())
      .catch((err) => console.log(err));

    return res;
  }

  async getSearchActor(
    query: string,
    include_adult: boolean,
    page: number,
  ): Promise<SearchActorObject> {
    const url = `${this.originUrl}person?query=${query}&include_adult=${include_adult}&language=${this.language}&page=${page}`;

    const res = await fetch(url, this.options)
      .then((res) => res.json())
      .catch((err) => console.log(err));

    return res;
  }

  async getSearchCompany(
    query: string,
    page: number,
  ): Promise<SearchCompanyObject> {
    const url = `${this.originUrl}company?query=${query}&page=${page}`;

    const res = await fetch(url, this.options)
      .then((res) => res.json())
      .catch((err) => console.log(err));

    return res;
  }

  async getSearchKeyword(
    query: string,
    page: number,
  ): Promise<SearchKeywordObject> {
    const url = `${this.originUrl}keyword?query=${query}&page=${page}`;

    const res = await fetch(url, this.options)
      .then((res) => res.json())
      .catch((err) => console.log(err));

    return res;
  }
}
