import movies from '../data.js'
import { v4 as uuid_v4 } from "uuid";

export const getMovies = ((req, res) => { // get the movie list in the form of JSON
    res.status(200).json(movies)
})

export const addMovie = ((req, res) => { // add new movie to the movies list
    const movie = req.body;
    if(!movie.title || !movie.director || !movie.release_date){ // controlling the coming data 
        res.status(400).json({message : "Title, Director or Release Date should not be empty!"})
        return
    }
    const newMovie = {   
                        id: uuid_v4(), // giving a unique id 
                        title: movie.title,
                        director: movie.director,
                        release_date: movie.release_date
                    }
    movies.push(newMovie)
    res.status(200).json({message : `Movie is added with the id : ${newMovie.id}`})
})

export const searchMovie = ((req, res) => { // search for a movie in the list
    const { id } = req.params
    const movie = movies.find(product => product.id === id)
    if(!movie) {
        return res.status(404).json({message : `There is no movie with id : ${id}`})
    }
    res.json(movie)
})

export const deleteMovie = ((req, res) => { // delete a movie from the list
    const { id } = req.params
    const movie = movies.find(product => product.id === id)
    if(movie) {
        const index = movies.findIndex(movie => movie.id == id) //index of the object which should be deleted
        movies.splice(index,1) 
        res.status(200).json({
                                message : 'Movie deleted',
                                movies : movies
                            })
    }
    else{
        return res.status(404).json({ message: `The movie with id ${id} not found in the database.`})
    }
})