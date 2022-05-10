import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [{name: "Star Wars", rating: '95', duration: '3h'}],
  filteredMovies: [],
  textInFilteredText: false,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.movies.push({
        name: action.payload.name,
        rating: action.payload.rating,
        duration: action.payload.duration,
      });
    },
    searchMovie: (state, action) => {
        state.filteredMovies = state.movies.filter(movie => movie.name.startsWith(action.payload))
    },
    setTextInFilteredText: (state, action) => {
        state.textInFilteredText = action.payload
    }
  },
});

export const movieAction = movieSlice.actions;

export default movieSlice.reducer;
