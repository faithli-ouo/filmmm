import {
  ActorsCombinedCreditsObject,
  ActorsImagesObject,
  ActorsLastestObject,
  ActorsMoviesCreditsObject,
  ActorsSocialIdObject,
  ActorsTranslationsObject,
  ActorsDetailsObject,
  PopularActorsObject,
  TMDBError,
} from '@filmmm/types';
import TMDBFetchHandle from "../tmdb/fetch.service";


export class ActorsService {

  private readonly originUrl = 'https://api.themoviedb.org/3/person/';
  private readonly language = process.env.TMDB_language!;
  private readonly options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: process.env.TMDB_Token!,
    },
  };

  async getAllPopularActors(page = "1"): Promise<PopularActorsObject> {
    const url = `${this.originUrl}popular?language=${this.language}&page=${page}`;
    return await TMDBFetchHandle<PopularActorsObject>(url, this.options)
  }

  async getActorsDeatilsById(id: number): Promise<ActorsDetailsObject> {
    const url = `${this.originUrl}${id}?language=${this.language}`;
    return await TMDBFetchHandle<ActorsDetailsObject>(url, this.options)
  }

  async getActorsCombinedCreditsById(
    id: number,
  ): Promise<ActorsCombinedCreditsObject> {
    const url = `${this.originUrl}${id}/combined_credits?language=${this.language}`;
    return await TMDBFetchHandle<ActorsCombinedCreditsObject>(url, this.options)
  }

  async getActorsSocialIdById(id: number): Promise<ActorsSocialIdObject> {
    const url = `${this.originUrl}${id}/external_ids?language=${this.language}`;
    return await TMDBFetchHandle<ActorsSocialIdObject>(url, this.options)
  }

  async getActorsImagesById(id: number): Promise<ActorsImagesObject> {
    const url = `${this.originUrl}${id}/images?language=${this.language}`;
    return await TMDBFetchHandle<ActorsImagesObject>(url, this.options)
  }

  async getActorsMovieCreditById(
    id: number,
  ): Promise<ActorsMoviesCreditsObject> {
    const url = `${this.originUrl}${id}/movie_credits?language=${this.language}`;
    return await TMDBFetchHandle<ActorsMoviesCreditsObject>(url, this.options)
  }

  async getActorsTranslationsById(
    id: number,
  ): Promise<ActorsTranslationsObject> {
    const url = `${this.originUrl}${id}/translations?language=${this.language}`;
    return await TMDBFetchHandle<ActorsTranslationsObject>(url, this.options)
  }

  async getActorsLastestById(id: number): Promise<ActorsLastestObject> {
    const url = `${this.originUrl}${id}/lastest?language=${this.language}`;
    return await TMDBFetchHandle<ActorsLastestObject>(url, this.options)
  }
}
