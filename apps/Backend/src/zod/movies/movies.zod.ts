import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

const allowedMoviesTypes = [
  "now_playing",
  "popular",
  "top_rated",
  "upcoming",
] as const;

const allowedMoviesDetailsTypes = [
  'alternative_titles',
  'credits',
  'social_id',
  'images',
  'keywords',
  'inclued_list',
  'recommendations',
  'release_date',
  'reviews',
  'similar',
  'translations',
  'videos',
  'watch_provider',
  'lastest',
] as const;

export const findAllMoviesQueryZod = zValidator(
  "query",
  z.object({
    type: z.enum(allowedMoviesTypes),
    page: z.string().optional(),
  })
);

export const findMovieByIdParamsZod = zValidator(
    "param",
    z.object({
      id: z.string().transform((v) => parseInt(v))
    })
  );

  export const findMovieByIdTypeParamsZod = zValidator(
    "param",
    z.object({
      id: z.string().transform((v) => parseInt(v)),
      type: z.enum(allowedMoviesDetailsTypes),
    })
  );

  export const findMovieByIdTypeQueryZod = zValidator(
    "query",
    z.object({
      page: z.string().optional(),
    })
  );