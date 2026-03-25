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
      const anecdote = state.find((a) => a.id === action.payload.id);
      anecdote.votes = action.payload.votes;
    },
  },
});

const { setAnecdotes, newAnecdote, vote } = anecdoteSlice.actions;

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

export const increaseVote = (id) => {
  return async (dispatch, getState) => {
    const anecdote = getState().anecdotes.find((a) => a.id === id);
    const oldVote = anecdote.votes;
    const changedAnecdote = await anecdotesService.increaseVote(id, oldVote);
    dispatch(vote(changedAnecdote));
  };
};

export default anecdoteSlice.reducer;
