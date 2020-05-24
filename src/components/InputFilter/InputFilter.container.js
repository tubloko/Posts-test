import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import InputFilter from "./InputFilter";
import {filteredString} from "../../redux/actionCreators/actionCreators";

const InputFilterContainer = () => {
  const dispatch = useDispatch();
  const changeFilter = (string) => dispatch(filteredString(string));
  const filter = useSelector(state => state.filterReducer.filter);

  return (
    <InputFilter changeFilter={changeFilter} filter={filter} />
  );
}

export default InputFilterContainer;