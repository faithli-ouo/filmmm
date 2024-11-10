import { Hono } from "hono";
import { TrendingService } from "src/services/trending/trending.service";
import { TrendingDTO } from "./dto/trending.dto";

const app = new Hono()
const trending = new TrendingService();
const dto = new TrendingDTO();

app.get('/:type',dto.TrendingParams(), dto.TrendingQuery(), async(c) => {
    
  const { type } = c.req.valid('param')
  const { page = 1, timeWindow } = c.req.valid('query')

  switch (type) {

    case 'movies':
      return c.json(await trending.getTrendingMovies(timeWindow, page))


    case 'actors':
      return c.json(await trending.getTrendingActors(timeWindow, page))


  


}})

export default app;