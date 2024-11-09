import { Hono } from 'hono'
import movies from './movies/movies'
import actors from './actors/actors'

const app = new Hono()

// API Route 
app
.route('/movies', movies)
.route('/actors', actors)



export default app;