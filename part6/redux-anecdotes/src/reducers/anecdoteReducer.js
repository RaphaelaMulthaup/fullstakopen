import { createSlice } from "@reduxjs/toolkit";
import anecdotesService from "../services/anecdotes";

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    setAnecdotes(_state, action) {
      return action.payload;
    },
    newAnecdote(state, action) {
      state.push(action.payload);
    },
    vote(state, action) {
      const anecdote = state.find((a) => a.id === action.payload);
      anecdote.votes += 1;
    },
  },
});

const { setAnecdotes, newAnecdote } = anecdoteSlice.actions;

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdotesService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const appendAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdoteObj = await anecdotesService.createNew(content);
    dispatch(newAnecdote(newAnecdoteObj));
  };
};

export const { vote } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;
