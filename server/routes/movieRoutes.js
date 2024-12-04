const movieRouter = require("express").Router();
const {
  addMovie,
  getAllMovies,
  updateMovie,
  deleteMovie,
  getMovieById,
} = require("../controllers/movieControllers");

// add a movie
movieRouter.post("/add-movie", addMovie);
movieRouter.get("/get-all-movies", getAllMovies);
movieRouter.put("/update-movie", updateMovie);
movieRouter.put("/delete-movie", deleteMovie);
movieRouter.get("/movie/:id", getMovieById);

module.exports = movieRouter;