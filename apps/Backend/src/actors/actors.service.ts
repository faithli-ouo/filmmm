import { Injectable } from '@nestjs/common';
import {
  ActorsCombinedCreditsObject,
  ActorsImagesObject,
  ActorsLastestObject,
  ActorsMoviesCreditsObject,
  ActorsSocialIdObject,
  ActorsTranslationsObject,
  ActorsDetailsObject,
  PopularActorsObject,
} from '@filmmm/types';


@Injectable()
export class ActorsService {

  private readonly originUrl = 'https://api.themoviedb.org/3/person/';
  private readonly language = process.env.TMDB_language;
  private readonly options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: process.env.TMDB_Token,
    },
  };

  async getAllPopularActors(page = 1): Promise<PopularActorsObject> {
    const url = `${this.originUrl}popular?language=${this.language}&page=${page}`;

    const res = await fetch(url, this.options)
      .then((res) => res.json())
      .catch((err) => console.log(err));

    return res;
  }

  async getActorsDeatilsById(id: number): Promise<ActorsDetailsObject> {
    const url = `${this.originUrl}${id}?language=${this.language}`;

    const res = await fetch(url, this.options)
      .then((res) => res.json())
      .catch((err) => console.log(err));

    return res;
  }

  async getActorsCombinedCreditsById(
    id: number,
  ): Promise<ActorsCombinedCreditsObject> {
    const url = `${this.originUrl}${id}/combined_credits?language=${this.language}`;

    const res = await fetch(url, this.options)
      .then((res) => res.json())
      .catch((err) => console.log(err));

    return res;
  }

  async getActorsSocialIdById(id: number): Promise<ActorsSocialIdObject> {
    const url = `${this.originUrl}${id}/external_ids?language=${this.language}`;

    const res = await fetch(url, this.options)
      .then((res) => res.json())
      .catch((err) => console.log(err));

    return res;
  }

  async getActorsImagesById(id: number): Promise<ActorsImagesObject> {
    const url = `${this.originUrl}${id}/images?language=${this.language}`;

    const res = await fetch(url, this.options)
      .then((res) => res.json())
      .catch((err) => console.log(err));

    return res;
  }

  async getActorsMovieCreditById(
    id: number,
  ): Promise<ActorsMoviesCreditsObject> {
    const url = `${this.originUrl}${id}/movie_credits?language=${this.language}`;

    const res = await fetch(url, this.options)
      .then((res) => res.json())
      .catch((err) => console.log(err));

    return res;
  }

  async getActorsTranslationsById(
    id: number,
  ): Promise<ActorsTranslationsObject> {
    const url = `${this.originUrl}${id}/translations?language=${this.language}`;

    const res = await fetch(url, this.options)
      .then((res) => res.json())
      .catch((err) => console.log(err));

    return res;
  }

  async getActorsLastestById(id: number): Promise<ActorsLastestObject> {
    const url = `${this.originUrl}${id}/lastest?language=${this.language}`;

    const res = await fetch(url, this.options)
      .then((res) => res.json())
      .catch((err) => console.log(err));

    return res;
  }
}
