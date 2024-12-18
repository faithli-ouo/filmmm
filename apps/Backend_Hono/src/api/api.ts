import { Hono } from 'hono'

import movies from './movies/movies'
import actors from './actors/actors'
import search from './search/search'
import trending from './trending/trend'

const app = new Hono()

// API Route 
app.route('/movies', movies)
app.route('/actors', actors)
app.route('/search', search)
app.route('/trending', trending)



export default app;