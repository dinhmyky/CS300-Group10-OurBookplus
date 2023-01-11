import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
  places: [],
  books: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.posts = [];
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("user friends non-existent :(");
      }
    },
    setFollowers: (state, action) => {
      if (state.user) {
        state.user.followers = action.payload.followers;
      } else {
        console.error("user follwers non-existent :(");
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) {
          return action.payload.post;
        }
        return post;
      });
      state.posts = updatedPosts;
    },
    setImpression: (state, action) => {
      if (state.user) {
        state.user.impressions = action.payload.impressions;
      } else {
        console.error("user impression non-existent :(");
      }
    },
    setViewedProfile: (state, action) => {
      if (state.user) {
        state.user.viewedProfile = action.payload.viewedProfile;
      } else {
        console.error("user viewed profile non-existent :(");
      }
    },
    setPlaceToMeet: (state, action) => {
      state.places = action.payload.places;
    },
    setBooks: (state, action) => {
      state.books = action.payload.books;
    },
  },
});

export const { 
  setMode, 
  setLogin, 
  setLogout, 
  setFriends, 
  setFollowers,
  setPosts, 
  setPost,
  setImpression,
  setViewedProfile,
  setPlaceToMeet,
  setBooks,
} = authSlice.actions;
export default authSlice.reducer;
