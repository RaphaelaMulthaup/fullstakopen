import { configureStore } from "@reduxjs/toolkit";
import anecdoteReducer from "./reducers/anecdoteReducer";
import filterReducer from "./reducers/filterReducer";
import notificatonReducer from "./reducers/notificatonReducer";

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    filterTerm: filterReducer,
    notification: notificatonReducer,
  },
});

export default store;
