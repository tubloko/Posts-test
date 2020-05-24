import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {setCurrentPage} from "../../redux/actionCreators/actionCreators";
import {selectByFilter} from "../../selectors/postsSelector";

import {Pagination} from "@material-ui/lab";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    color: 'white',
  },
}));

const PaginationControllerContainer = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const setActivePage = (number) => dispatch(setCurrentPage(number))
  const activePage = useSelector(state => state.postReducer.currentPage);
  const count = useSelector(state => selectByFilter(state).length);

  return (
    <div className={classes.root}>
      <Pagination
        color="secondary"
        onChange={(e, value) => setActivePage(value)}
        page={activePage}
        count={Math.ceil(count / 6)}
        size="large"
      />
    </div>
  );
}

export default PaginationControllerContainer;