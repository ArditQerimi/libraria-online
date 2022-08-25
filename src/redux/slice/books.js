import { createSlice, current } from "@reduxjs/toolkit";

const books = createSlice({
  name: "books",
  initialState: [
    {
      id: Math.random(),
      title: "",
      image: "",
      posted_by: "Ardit Qerimi",
      reviews: 42,
      rating: 4.8,
      ratings: 493,
      date: "13/08/2022",
      category: "",
      publisher: "",
      author: "",
      description: "",
      price: 0,
      lang: "",
    },
  ],

  reducers: {
    getBooksSlice: (state, action) => {
      state = action.payload;
      return state;
    },
    postBooksSlice: (state, action) => {
      state.push(action.payload.book);
      return state;
    },
    deleteBookSlice: (state, action) => {
      state = state.filter((state) => state._id !== action.payload);
      return state;
    },
    editBookSlice: (state, action) => {
      // console.log(action.payload);
      state = state.map((i) =>
        i._id == action.payload._id ? action.payload : i
      );
      return state;
    },
  },
});
export const { getBooksSlice, postBooksSlice, deleteBookSlice, editBookSlice } =
  books.actions;
export default books.reducer;
