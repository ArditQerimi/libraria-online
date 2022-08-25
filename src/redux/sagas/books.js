import {
  getBooksAPI,
  postBooksAPI,
  deleteBookAPI,
  editBookAPI,
} from "../../apis/apis";
import {
  getBooksSlice,
  postBooksSlice,
  deleteBookSlice,
  editBookSlice,
} from "../slice/books";
import { GET_BOOKS, POST_BOOKS, DELETE_BOOK, EDIT_BOOK } from "../types/types";
import { put, takeEvery } from "redux-saga/effects";

export function* getBooksSaga() {
  const data = yield getBooksAPI();
  yield put(getBooksSlice(data.data.books));
}
export function* postBooksSaga(action) {
  yield postBooksAPI(action.book);
  yield put(postBooksSlice(action.book));
}

export function* deleteBookSaga(action) {
  yield deleteBookAPI(action.id);
  yield put(deleteBookSlice(action.id));
}

export function* editBookSaga(action) {
  console.log(action.id, action.newobj);
  yield editBookAPI(action.id, action.newobj);
  yield put(editBookSlice(action.id));
}

export function* watchBooksAsync() {
  yield takeEvery(GET_BOOKS, getBooksSaga);
  yield takeEvery(POST_BOOKS, postBooksSaga);
  yield takeEvery(DELETE_BOOK, deleteBookSaga);
  yield takeEvery(EDIT_BOOK, editBookSaga);
}
