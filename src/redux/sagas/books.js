import {
  getBooksAPI,
  postBooksAPI,
  deleteBookAPI,
  editBookAPI,
} from "../../apis/apis";
import {
  getBooksSlice,
  getBooksFetch,
  getBooksError,
  postBooksSlice,
  deleteBookSlice,
  editBookSlice,
} from "../slice/books";
import { GET_BOOKS, POST_BOOKS, DELETE_BOOK, EDIT_BOOK } from "../types/types";
import { put, takeEvery, call } from "redux-saga/effects";

export function* getBooksSaga() {
  try {
    yield put(getBooksFetch());
    // const data = yield call(() => getBooksAPI());
    const data = yield getBooksAPI();
    yield put(getBooksSlice(data.data.books));
  } catch (error) {
    yield put(getBooksError());
  }
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
  console.log(put(editBookSlice(action.id)));
  yield put(editBookSlice(action.id));
}

export function* watchBooksAsync() {
  yield takeEvery(GET_BOOKS, getBooksSaga);
  yield takeEvery(POST_BOOKS, postBooksSaga);
  yield takeEvery(DELETE_BOOK, deleteBookSaga);
  yield takeEvery(EDIT_BOOK, editBookSaga);
}
