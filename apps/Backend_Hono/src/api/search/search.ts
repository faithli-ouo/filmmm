import { Hono } from 'hono';
import { SearchService } from 'src/services/search/search.service';
import { SearchDTO } from './dto/search.dto';
  

const app = new Hono();
const search = new SearchService();
const dto = new SearchDTO();

app.get('/:type',dto.SearchParams(), dto.SearchQuery(), async(c) => {

    const { type } = c.req.valid('param')
    const { query, include_adult = false, year, page } = c.req.valid('query');

    switch (type) {
        case 'collection':
          
          return c.json(search.getSearchCollection(
            query,
            include_adult,
            page,
          ));

        case 'movie':
          
          return c.json(search.getSearchMovie(
            query,
            include_adult,
            page,
            year,
          ));


        case 'actor':
          
          return c.json(search.getSearchActor(
            query,
            include_adult,
            page,
          ));

        case 'company':
          
          return c.json(search.getSearchCompany(
            query,
            page,
          ));

        case 'keyword':

          return c.json(search.getSearchKeyword(
            query,
            page,
          ));
      }

})

export default app;