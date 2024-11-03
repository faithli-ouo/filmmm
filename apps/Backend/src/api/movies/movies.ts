import { Hono } from "hono";
import * as movieValidate from "../../zod/movies/movies.zod";
import { MoviesService } from "../../services/movies/movies.services";
import { HTTPException } from "hono/http-exception";

const app = new Hono();
const movieService = new MoviesService();

// Find All Movies
app.get("/", movieValidate.findAllMoviesQueryZod, async (c) => {
  const { type, page = "1" } = c.req.valid("query");

  const res = await movieService.getMovies(type, page);
  try {
    return c.json(res);
  } catch (error) {
    throw new HTTPException(400, { cause: error, message: error as string });
  }
});

// Find Movie By ID
app.get("/:id", 
  movieValidate.findMovieByIdParamsZod
  , async (c) => {
    const { id } = c.req.valid("param");
  
    const res = await movieService.getMoviesDetailsByID(id)

    if (!res.id) {
      throw new HTTPException(404, { cause: res.status_message, message: res.status_message as string });
    }

    try {
      return c.json(res);
    } catch (error) {
      throw new HTTPException(400, { cause: error, message: error as string });
    }
  });

// Find Movie By ID & Types
app.get("/:id/:type", 
  movieValidate.findMovieByIdTypeParamsZod,
  movieValidate.findMovieByIdTypeQueryZod
  , async (c) => {
    const { id, type } = c.req.valid("param");
    const { page } = c.req.valid("query");
  
    switch (type) {
      case 'alternative_titles':
        const alternativeRitlesRes =
          await movieService.getMoviesAlternativeTitlesByID(id);
        return alternativeRitlesRes as MoviesAlternativeTitles;

      case 'credits':
        const creditsRes = await movieService.getMoviesCreditsByID(id);
        return creditsRes as MoviesCredits;

      case 'social_id':
        const socialIdRes =
          await movieService.getMoviesSocialIDByID(id);
        return socialIdRes as MoviesSocialId;

      case 'images':
        const imagesRes = await movieService.getMoviesImagesByID(id);
        return imagesRes as MoviesImages;

      case 'keywords':
        const keywordsRes =
          await movieService.getMoviesKeywordsByID(id);
        return keywordsRes as MoviesKeywords;

      case 'inclued_list':
        const incluedListRes =
          await movieService.getMoviesIncludedListsByID(id, page);
        return incluedListRes as MoviesIncludedList;

      case 'recommendations':
        const recommendationsRes =
          await movieService.getMoviesRecommendationsByID(id);
        return recommendationsRes as MoviesRecomendations;

      case 'release_date':
        const releaseDateRes =
          await movieService.getMoviesReleaseDatesByID(id);
        return releaseDateRes as MoviesReleaseDates;

      case 'reviews':
        const reviewsRes = await movieService.getMoviesReviewsByID(id);
        return reviewsRes as MoviesReviews;

      case 'similar':
        const similarRes = await movieService.getMoviesSimilarByID(
          id,
          page,
        );
        return similarRes as MoviesSimilar;

      case 'translations':
        const translationsRes =
          await movieService.getMoviesTranslationByID(id);
        return translationsRes as MoviesTranslations;

      case 'videos':
        const videosRes = await movieService.getMoviesVideosByID(id);
        return videosRes as MoviesVideos;

      case 'watch_provider':
        const watchProviderRes =
          await movieService.getMoviesWatchProviderByID(id);
        return watchProviderRes as MoviesWatchProviders;

      case 'lastest':
        const lastestRes = await movieService.getMoviesLastestByID(id);
        return lastestRes as MoviesLastest;
    }


    if (!res.id) {
      throw new HTTPException(404, { cause: res.status_message, message: res.status_message as string });
    }

    try {
      return c.json(res);
    } catch (error) {
      throw new HTTPException(400, { cause: error, message: error as string });
    }
  });

app.post("/", (c) => c.json("create a book", 201));
app.get("/:id", (c) => c.json(`get ${c.req.param("id")}`));

export default app;
