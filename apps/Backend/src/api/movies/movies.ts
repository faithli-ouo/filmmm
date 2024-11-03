import { Hono } from "hono";
import * as movieValidate from "../../zod/movies/movies.zod";
import { MoviesService } from "../../services/movies/movies.services";
import { HTTPException } from "hono/http-exception";
import {
  MoviesAlternativeTitles,
  MoviesCredits,
  MoviesImages,
  MoviesIncludedList,
  MoviesKeywords,
  MoviesLastest,
  MoviesRecomendations,
  MoviesReleaseDates,
  MoviesReviews,
  MoviesSimilar,
  MoviesSocialId,
  MoviesTranslations,
  MoviesVideos,
  MoviesWatchProviders,
} from '../../../../../packages/types/TMDB/movies/movies_details_other_type';

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
    const { page = "1" } = c.req.valid("query");
  
    switch (type) {
      case 'alternative_titles':
        const alternativeRitlesRes:MoviesAlternativeTitles =
          await movieService.getMoviesAlternativeTitlesByID(id);
        return c.json(alternativeRitlesRes)

      case 'credits':
        const creditsRes: MoviesCredits = await movieService.getMoviesCreditsByID(id);
        return c.json(creditsRes) 

      case 'social_id':
        const socialIdRes: MoviesSocialId =
          await movieService.getMoviesSocialIDByID(id);
        return c.json(socialIdRes) 

      case 'images':
        const imagesRes: MoviesImages = await movieService.getMoviesImagesByID(id);
        return c.json(imagesRes) 

      case 'keywords':
        const keywordsRes: MoviesKeywords =
          await movieService.getMoviesKeywordsByID(id);
        return c.json(keywordsRes) 

      case 'inclued_list':
        const incluedListRes: MoviesIncludedList =
          await movieService.getMoviesIncludedListsByID(id, page);
        return c.json(incluedListRes) 

      case 'recommendations':
        const recommendationsRes: MoviesRecomendations =
          await movieService.getMoviesRecommendationsByID(id);
        return c.json(recommendationsRes) 

      case 'release_date':
        const releaseDateRes: MoviesReleaseDates =
          await movieService.getMoviesReleaseDatesByID(id);
        return c.json(releaseDateRes)

      case 'reviews':
        const reviewsRes: MoviesReviews = await movieService.getMoviesReviewsByID(id);
        return c.json(reviewsRes) 

      case 'similar':
        const similarRes: MoviesSimilar = await movieService.getMoviesSimilarByID(
          id,
          page,
        );
        return c.json(similarRes) 

      case 'translations':
        const translationsRes: MoviesTranslations =
          await movieService.getMoviesTranslationByID(id);
        return c.json(translationsRes) 

      case 'videos':
        const videosRes: MoviesVideos = await movieService.getMoviesVideosByID(id);
        return c.json(videosRes) 

      case 'watch_provider':
        const watchProviderRes: MoviesWatchProviders =
          await movieService.getMoviesWatchProviderByID(id);
        return c.json(watchProviderRes) 

      case 'lastest':
        const lastestRes: MoviesLastest = await movieService.getMoviesLastestByID(id);
        return c.json(lastestRes) 
    }


    // if (!res.id) {
    //   throw new HTTPException(404, { cause: res.status_message, message: res.status_message as string });
    // }

    // try {
    //   return c.json(res);
    // } catch (error) {
    //   throw new HTTPException(400, { cause: error, message: error as string });
    // }
  });

app.post("/", (c) => c.json("create a book", 201));
app.get("/:id", (c) => c.json(`get ${c.req.param("id")}`));

export default app;
