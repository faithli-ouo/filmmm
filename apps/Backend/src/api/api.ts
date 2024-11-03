import { Hono } from 'hono'
import movies from './movies/movies'

const app = new Hono()

  
app.route('/movies', movies)



export default app;