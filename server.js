import express, { json } from 'express'
import movies_routes from './routes/movies.js'

const app = express();

// these two lines are responsible for parsing the request body
app.use(express.json()) 
app.use(express.urlencoded({extended:false}))

app.use('/', movies_routes)

app.listen(3000, () => {
    console.log('server is listening on port 3000')
})


export default app;
