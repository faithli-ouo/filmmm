import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { pageSchema } from "zod/tmdbGlobal/tmdbGlobal.schema";

const allowedTrendingTypes = ["movies", "actors"] as const;
const allowedTimeWindow = ["day", "week"] as const;

const trendingEnum = z.object({ type: z.enum(allowedTrendingTypes) });
const timeWindowEnum = z.object({
  timeWindow: z.enum(allowedTimeWindow).optional().default("day"),
});

export class TrendingDTO {
  TrendingParams() {
    return zValidator(
      "param",
      z.object({
        ...trendingEnum.shape,
      })
    );
  }

  TrendingQuery() {
    return zValidator(
      "query",
      z.object({
        ...pageSchema.shape,
        ...timeWindowEnum.shape,
      })
    );
  }
}
