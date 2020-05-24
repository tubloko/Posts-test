import React from 'react';

import {Box, Input, Typography, makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    color: 'white',
  }
})

const InputFilter = ({ changeFilter, filter }) => {
  const classes = useStyles();

  return (
    <Box mb={5} mt={5} color={"primary"} >
      <Typography variant="h5" component="h3" color="secondary" display="inline">Search:</Typography>
      <Box ml={1} pl={1} component="span">
        <Input
          className={classes.root}
          size="medium"
          label="Filter"
          value={filter}
          color="secondary"
          onChange={(e) => changeFilter(e.target.value)}
        />
      </Box>
    </Box>
  );
}

export default InputFilter;