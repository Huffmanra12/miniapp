const express = require('express');
const cors = require('cors')
const app = express();
const port = 8080;

app.use(express.json());
app.use(cors())

const knex = require('knex')(require('../knexfile.js') ['development'])

//All Get Requests

app.get('/', (req, res) => {
  res.status(200).json('Express server is running')
})
app.get('/home', async (req, res) => {
    const movies = await knex('movies_table')
    .select("*")
  res.status(200).json(movies)
})

app.get('/movies/search/:title', async (req, res) => {
  const { title } = req.params;
  try {
      const searchedMovies = await knex('movies_table')
          .select('*')
          .whereILike('title', '%' + title + '%');

      res.json(searchedMovies);
  } catch (err) {
      res.status(500).json({ error: 'An error occurred while fetching movies' });
  }
});

app.get('/userAdded', async (req, res) => {
  try{
    const userMovies = await knex('movies_table')
    .join('add_method_table', "movies_table.add_method_id" , "=", "add_method_table.id" )
    .select("movies_table.title")
    .where('add_method_table.id', 2)
    res.status(200).json(userMovies)
  }catch(err){
    res.status(500).json({message:"Failed to retrieve movies"})
  }
})

//Post Request to add to the database

app.post('/movies/add', async (req, res) => {
  const {title} = req.body;

  movieToAdd = {
    title: title,
    add_method_id: 2
  }
  try {
    const addMovie = await knex ('movies_table')
    .insert(movieToAdd)
    .returning("*")
  }catch (err){
    res.status(500).json({error: 'Failed to add title'})
  }
})



app.listen(port, () => console.log(`Server is listening on port ${port}`))