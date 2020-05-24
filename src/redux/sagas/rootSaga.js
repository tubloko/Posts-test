import {all} from "redux-saga/effects";
import {
  watchAddPostWorker,
  watchDeletePostWorker,
  watchGetPostsWorker,
  watchGetPostWorker
} from "./postsSaga";

export default function* rootSaga() {
  yield all([
    watchGetPostsWorker(),
    watchGetPostWorker(),
    watchAddPostWorker(),
    watchDeletePostWorker(),
  ]);
}