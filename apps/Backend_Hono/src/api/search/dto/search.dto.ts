import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { pageSchema } from "zod/tmdbGlobal/tmdbGlobal.schema";

const allowedSearchTypes = [
  "collection",
  "movie",
  "actor",
  "company",
  "keyword",
] as const;

const searchEnum = z.object({
  type: z.enum(allowedSearchTypes),
});

const querySchema = z.object({
  query: z.string(),
  include_adult: z.boolean().optional(),
  year: z.coerce.number().optional(),
});

export class SearchDTO {
  SearchParams() {
    return zValidator(
      "param",
      z.object({
        ...searchEnum.shape,
      })
    );
  }

  SearchQuery() {
    return zValidator(
      "query",
      z.object({
        ...pageSchema.shape,
        ...querySchema.shape,
      })
    );
  }
}
