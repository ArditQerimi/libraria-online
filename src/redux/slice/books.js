import { createSlice, current } from "@reduxjs/toolkit";

const books = createSlice({
  name: "books",
  initialState: {
    books: [],
    isLoading: false,
    error: false,
  },

  reducers: {
    getBooksFetch: (state, action) => {
      state.isLoading = true;
      state.error = false;
      return state;
    },
    getBooksSlice: (state, action) => {
      state.books = action.payload;
      state.isLoading = false;
      state.error = false;
      return state;
    },
    getBooksError: (state, action) => {
      console.log(current(state));
      state.isLoading = false;
      state.error = true;
      return state;
    },

    postBooksSlice: (state, action) => {
      state.books.push(action.payload.book);
      return state;
    },
    deleteBookSlice: (state, action) => {
      state.books = state.books.filter((state) => state._id !== action.payload);
      return state;
    },
    editBookSlice: (state, action) => {
      // console.log(action.payload);
      state.books = state.books.map((i) =>
        i._id == action.payload._id ? action.payload : i
      );
      return state;
    },
  },
});
export const {
  getBooksSlice,
  postBooksSlice,
  deleteBookSlice,
  editBookSlice,
  getBooksFetch,
  getBooksError,
} = books.actions;
export default books.reducer;
