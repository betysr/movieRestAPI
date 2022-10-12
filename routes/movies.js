import { Router } from 'express'
const router = Router()

import { getMovies, addMovie, searchMovie, deleteMovie} from '../controllers/movies.js'

router.get('/movie', getMovies) // get movies 

router.get('/movie/:id', searchMovie) // search a movie in the list

router.post('/movie', addMovie) // add movies to the list

router.delete('/movie/:id', deleteMovie) // delete a movie from the list

export default router;