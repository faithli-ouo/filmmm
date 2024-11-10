import { Hono } from "hono";
import { ActorsDTO } from "./dto/actors.dto";
import { ActorsService } from "src/services/actors/actors.service";

const app = new Hono();
const actors = new ActorsService();
const dto = new ActorsDTO();

//Find All Pupular Actors
app.get("/popular", dto.AllPopularActors(), async (c) => {
  const { page = 1 } = c.req.valid("query");
  return c.json(await actors.getAllPopularActors(page));
});

//Find Actor Detail By Id
app.get("/:id", dto.ActorDetails(), async (c) => {
  const { id } = c.req.valid("param");
  return c.json(await actors.getActorsDeatilsById(id));
});

//Find Actor Other Detail By Id
app.get("/:id/:type", dto.ActorOtherDetails(), async (c) => {
  const { id, type } = c.req.valid("param");
  switch (type) {
    case "combined_credits":
      return c.json(await actors.getActorsCombinedCreditsById(id));

    case "social_id":
      return c.json(await actors.getActorsSocialIdById(id));

    case "images":
      return c.json(await actors.getActorsImagesById(id));

    case "movie_credits":
      return c.json(await actors.getActorsMovieCreditById(id));

    case "translations":
      return c.json(await actors.getActorsTranslationsById(id));

    case "lastest":
      return c.json(await actors.getActorsLastestById(id));

    default:
      break;
  }
});

export default app;
