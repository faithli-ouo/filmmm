import { Hono } from 'hono'
import api from './api/api'
import { cors } from 'hono/cors'

const app = new Hono()



app.use(
  '*',
  cors({
    origin: '*',
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  })
)
app.get('/', (c) => {
  return c.text('This is a TMDB api. Made with HONO on Bun runtime.')
})


app.route('/api', api)


export default app;