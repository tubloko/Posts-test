import {
  ADD_POST_FAILURE,
  ADD_POST_LOADING, ADD_POST_SUCCESS, DELETE_POST_FAILURE, DELETE_POST_LOADING, DELETE_POST_SUCCESS,
  GET_ALL_POSTS_FAILURE,
  GET_ALL_POSTS_LOADING,
  GET_ALL_POSTS_SUCCESS,
  GET_ONE_POST,
  GET_ONE_POST_FAILURE,
  GET_ONE_POST_SUCCESS,
  SET_CURRENT_PAGE,
} from "../actionTypes/actionTypes";

const initialState = {
  posts: [],
  post: {},
  loading: false,
  loaded: true,
  error: false,
  currentPage: 1,
}

export const postsReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_ALL_POSTS_LOADING:
      return { ...state, loading: true, loaded: false };

    case GET_ALL_POSTS_SUCCESS:
      return { ...state, posts: action.payload.posts, loading: false, loaded: true, };

    case GET_ALL_POSTS_FAILURE:
      return { ...state, loading: false, loaded: false, error: true };

    case GET_ONE_POST:
      return { ...state, loading: true, loaded: false };

    case GET_ONE_POST_SUCCESS:
      return { ...state, post: action.payload.post, loading: false, loaded: true, };

    case GET_ONE_POST_FAILURE:
      return { ...state, loading: false, loaded: false, error: true };

    case ADD_POST_LOADING:
      return { ...state, loading: true, loaded: false };

    case ADD_POST_SUCCESS:
      return { ...state, posts: [...state.posts, action.payload], loading: false, loaded: true, };

    case ADD_POST_FAILURE:
      return { ...state, loading: false, loaded: false, error: true };

    case DELETE_POST_LOADING:
      return { ...state, loading: true, loaded: false };

    case DELETE_POST_SUCCESS:
      return {
        ...state,
        posts: [...state.posts.filter(({id}) => id !== action.payload.id)],
        loading: false,
        loaded: true,
      };

    case DELETE_POST_FAILURE:
      return { ...state, loading: false, loaded: false, error: true };

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload.page };

    default:
      return state;
  }
}