import {FILTERED_STRING} from "../actionTypes/actionTypes";

const initialState = {
  filter: '',
}

export const filterReducer = (state = initialState, action) => {
  if (action.type === FILTERED_STRING) {
    return { filter: action.payload.string };
  }

  return state;
}