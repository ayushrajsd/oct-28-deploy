const Movie = require("../models/movieModel");

const addMovie = async (req, res) => {
  try {
    console.log("movie request", req.body);
    const newMovie = new Movie(req.body);
    await newMovie.save();
    res.send({
      success: true,
      message: "Movie added successfully",
    });
  } catch (err) {
    console.log(err);
    res.send({
      success: false,
      message: err.message,
    });
  }
};

const getAllMovies = async (req, res) => {
  try {
    const allMovies = await Movie.find();
    res.send({
      success: true,
      data: allMovies,
    });
  } catch (err) {
    console.log(err);
    res.send({
      success: false,
      message: err.message,
    });
  }
};

const updateMovie = async (req, res) => {
  try {
    await Movie.findByIdAndUpdate(req.body.movieId, req.body);
    res.send({
      success: true,
      message: "Movie updated successfully",
    });
  } catch (err) {
    console.log(err);
    res.send({
      success: false,
      message: err.message,
    });
  }
};

const deleteMovie = async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.body.movieId);
    res.send({
      success: true,
      message: "Movie deleted successfully",
    });
  } catch (err) {
    console.log(err);
    res.send({
      success: false,
      message: err.message,
    });
  }
};
const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.send({
      success: true,
      data: movie,
    });
  } catch (err) {
    console.log(err);
    res.send({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  addMovie,
  getAllMovies,
  updateMovie,
  deleteMovie,
  getMovieById,
};
