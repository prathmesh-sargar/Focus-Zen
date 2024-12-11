import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    video: [],
    category: "coding for beginners",
    username:  "" || localStorage.getItem("username") , // Added username to the initial state
  },
  reducers: {
    setHomeVideos: (state, action) => {
      state.video = action.payload;
    },
    setcategory: (state, action) => {
      state.category = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload; // Update username
      localStorage.setItem("username", action.payload); // Save to localStorage
    },
    clearUsername: (state) => {
      state.username = ""; // Clear username on logout
      localStorage.removeItem("username"); // Remove from localStorage
    },
  },
});

export const { setHomeVideos, setcategory, setUsername, clearUsername } =
  appSlice.actions;
export default appSlice.reducer;
