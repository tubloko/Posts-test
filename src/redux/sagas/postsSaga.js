import {call, put, takeEvery} from 'redux-saga/effects';
import API from './../../services/PostService';
import {
  GET_ALL_POSTS_LOADING,
  ADD_POST_LOADING,
  DELETE_POST_LOADING,
  GET_ONE_POST,
} from "../actionTypes/actionTypes";
import {
  getAllPostsSuccess,
  getAllPostsFailure,
  getOnePostSuccess,
  getOnePostFailure,
  createPostSuccess,
  createPostFailure,
  deleteOnePostSuccess,
  deleteOnePostFailure,
} from "../actionCreators/actionCreators";

function* workerGetPosts() {
  const posts = yield call(API.getAllPosts);
  if (posts) yield put(getAllPostsSuccess(posts));
  else yield put(getAllPostsFailure());
}

function* workerGetPost(action) {
  const post = yield call(API.getOnePost, action.payload.id);
  if (post) yield put(getOnePostSuccess(post));
  else yield put(getOnePostFailure());
}

function* workerAddPost(action) {
  const result = yield call(API.addPost, action.payload);
  if (!result.err) yield put(createPostSuccess(action.payload));
  else yield put(createPostFailure());
}

function* workerDeletePost(action) {
  const result = yield call(API.deletePost, action.payload.id);
  if (!result.err) yield put(deleteOnePostSuccess(action.payload.id));
  else yield put(deleteOnePostFailure());
}

export function* watchGetPostsWorker() {
  yield takeEvery(GET_ALL_POSTS_LOADING, workerGetPosts);
}

export function* watchGetPostWorker() {
  yield takeEvery(GET_ONE_POST, workerGetPost);
}

export function* watchAddPostWorker() {
  yield takeEvery(ADD_POST_LOADING, workerAddPost);
}

export function* watchDeletePostWorker() {
  yield takeEvery(DELETE_POST_LOADING, workerDeletePost);
}