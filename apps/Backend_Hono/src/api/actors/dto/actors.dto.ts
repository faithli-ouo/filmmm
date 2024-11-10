import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { IdSchema, pageSchema } from "zod/tmdbGlobal/tmdbGlobal.schema";

const allowedTypes = [
  "combined_credits",
  "social_id",
  "images",
  "movie_credits",
  "translations",
  "lastest",
] as const;

const allowedOthersTypesSchema = z.object({
  type: z.enum(allowedTypes),
});


export class ActorsDTO {
  AllPopularActors() {
    return zValidator(
      "query",
      z.object({
        ...pageSchema.shape,
      })
    );
  }

  ActorDetails() {
    return zValidator(
      "param",
      z.object({
        ...IdSchema.shape,
      })
    );
  }

  ActorOtherDetails() {
    return zValidator(
      "param",
      z.object({
        ...IdSchema.shape,
        ...allowedOthersTypesSchema.shape,
      })
    );
  }
}
