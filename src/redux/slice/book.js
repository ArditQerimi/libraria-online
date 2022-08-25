import { createSlice } from "@reduxjs/toolkit";

const book = createSlice({
  name: "book",
  initialState: {
    id: 0,
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
  reducers: {
    setBookSlice: (state, action) => {
      console.log(action.payload);
      state = action.payload;
      return state;
    },
  },
});
export const { setBookSlice } = book.actions;
export default book.reducer;
