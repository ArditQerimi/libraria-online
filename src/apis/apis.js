import axios from "axios";

axios.defaults.baseURL = "https://libraria-online.herokuapp.com";
// axios.defaults.baseURL = "http://localhost:8080";

export const getBooksAPI = async () => axios.get("/");
export const postBooksAPI = async (book) => axios.post("/", book);
export const deleteBookAPI = async (_id) => axios.delete(`/${_id}`);
export const editBookAPI = async (_id, newobj) => axios.put(`/${_id}`, newobj);
