import { zValidator } from "@hono/zod-validator"
import { HTTPException } from "hono/http-exception";
import { number, object, z } from "zod"
import { IdSchema, pageSchema } from "zod/tmdbGlobal/tmdbGlobal.schema";

const allowedMovieTypes = ['now_playing', 'popular', 'top_rated', 'upcoming'] as const;
const allowedMoviesDetailsTypes = [
    'alternative_titles',
    'credits',
    'social_id',
    'images',
    'keywords',
    'included_list',
    'recommendations',
    'release_date',
    'reviews',
    'similar',
    'translations',
    'videos',
    'watch_provider',
    'lastest',
  ] as const;



const movieTypeSchema = z.object({
    type: z.enum(allowedMovieTypes),
});

const movieDetailsTypeSchema = z.object({
    type: z.enum(allowedMoviesDetailsTypes),
});


export class MoviesDTO {

    AllMoviesQuery() { // Example helper method
        return zValidator('query', z.object({
            ...pageSchema.shape, ...movieTypeSchema.shape
        }), (result, c) => {
            if (!result.success) {
                console.log("fuck");
                
              }
        });
    }
    
    MovieByIdParams() {
        return zValidator('param', z.object({  // Make this a static property
            ...IdSchema.shape
        }));
    }

    MovieByIdTypeParams(){
        return zValidator('param', z.object({  // Make this a static property
            ...IdSchema.shape,
            ...movieDetailsTypeSchema.shape
        }));
    }

    MovieByIdTypeQuery() { 
        return zValidator('query', z.object({ 
            ...pageSchema.shape
        }));
    }
}




