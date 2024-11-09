import { Hono } from "hono";
import { MoviesService } from "../../services/movies/movies.service";
import { findAllMoviesQueryZod, findMovieByIdParamsZod, findMovieByIdTypeParamsZod, findMovieByIdTypeQueryZod } from "./dto/movies.dto";


const app = new Hono();
const movieService = new MoviesService();

// Find All Movies
app.get("/", findAllMoviesQueryZod, async (c) => {
  const { type, page = "1" } = c.req.valid("query");
  return c.json(await movieService.getMovies(type, page));
});

// Find Movie By ID
app.get("/:id", findMovieByIdParamsZod, async (c) => {
  const { id } = c.req.valid("param");

  return c.json(await movieService.getMoviesDetailsByID(id));
});

// Find Movie By ID & Types
app.get(
  "/:id/:type",
  findMovieByIdTypeParamsZod,
  findMovieByIdTypeQueryZod,
  async (c) => {
    const { id, type } = c.req.valid("param");
    const { page } = c.req.valid("query");

    switch (type) {
      case "alternative_titles":
        return c.json(await movieService.getMoviesAlternativeTitlesByID(id));

      case "credits":
        return c.json(await movieService.getMoviesCreditsByID(id));

      case "social_id":
        return c.json(await movieService.getMoviesSocialIDByID(id));

      case "images":
        return c.json(await movieService.getMoviesImagesByID(id));

      case "keywords":
        return c.json(await movieService.getMoviesKeywordsByID(id));

      case "included_list":
        return c.json(await movieService.getMoviesIncludedListsByID(id, page));

      case "recommendations":
        return c.json(await movieService.getMoviesRecommendationsByID(id));

      case "release_date":
        return c.json(await movieService.getMoviesReleaseDatesByID(id));

      case "reviews":
        return c.json(await movieService.getMoviesReviewsByID(id));

      case "similar":
        return c.json(await movieService.getMoviesSimilarByID(id, page));

      case "translations":
        return c.json(await movieService.getMoviesTranslationByID(id));

      case "videos":
        return c.json(await movieService.getMoviesVideosByID(id));

      case "watch_provider":
        return c.json(await movieService.getMoviesWatchProviderByID(id));

      case "lastest":
        return c.json(await movieService.getMoviesLastestByID(id));
    }
  }
);

export default app;
