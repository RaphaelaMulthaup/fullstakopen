import { createSlice } from "@reduxjs/toolkit";

export const showNotification = (notification, time) => {
  return (dispatch) => {
    dispatch(setNotification(notification));
    setTimeout(() => dispatch(clearNotification()), time * 1000);
  };
};

const notificationSlice = createSlice({
  name: "notification",
  initialState: "",
  reducers: {
    setNotification(_state, action) {
      return action.payload;
    },
    clearNotification() {
      return "";
    },
  },
});

export const { setNotification, clearNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
