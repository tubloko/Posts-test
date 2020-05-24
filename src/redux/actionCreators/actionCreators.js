import {
  ADD_POST_FAILURE,
  ADD_POST_LOADING, ADD_POST_SUCCESS,
  DELETE_POST_FAILURE,
  DELETE_POST_LOADING, DELETE_POST_SUCCESS,
  FILTERED_STRING,
  GET_ALL_POSTS_FAILURE,
  GET_ALL_POSTS_LOADING,
  GET_ALL_POSTS_SUCCESS,
  GET_ONE_POST,
  GET_ONE_POST_FAILURE,
  GET_ONE_POST_SUCCESS,
  SET_CURRENT_PAGE,
} from "../actionTypes/actionTypes";

export const getAllPostsLoading = () => ({ type: GET_ALL_POSTS_LOADING });
export const getAllPostsSuccess = (posts) => ({ type: GET_ALL_POSTS_SUCCESS, payload: { posts } });
export const getAllPostsFailure = () => ({ type: GET_ALL_POSTS_FAILURE });

export const getOnePost = (id) => ({ type: GET_ONE_POST, payload: { id } });
export const getOnePostSuccess = (post) => ({ type: GET_ONE_POST_SUCCESS, payload: { post } });
export const getOnePostFailure = () => ({ type: GET_ONE_POST_FAILURE });

export const deleteOnePost = (id) => ({ type: DELETE_POST_LOADING, payload: { id } });
export const deleteOnePostSuccess = (id) => ({ type: DELETE_POST_SUCCESS, payload: { id } });
export const deleteOnePostFailure = () => ({ type: DELETE_POST_FAILURE });

export const createPost = ({ title, description, id }) => (
  { type: ADD_POST_LOADING, payload: { title, description, id } });
export const createPostSuccess = ({ title, description, id }) => (
  { type: ADD_POST_SUCCESS, payload: { title, description, id } });
export const createPostFailure = () => ({ type: ADD_POST_FAILURE });

export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, payload: { page } });

export const filteredString = (string) => ({ type: FILTERED_STRING, payload: { string } });
