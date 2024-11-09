import { Hono } from 'hono'
import api from './api/api'

const app = new Hono()


app.get('/', (c) => {
  return c.text('This is a TMDB api. Made with HONO on Bun runtime.')
})


app.route('/api', api)


export default app;