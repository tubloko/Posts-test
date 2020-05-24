import React from 'react';
import {Link} from 'react-router-dom';

import {Grid, Typography, CircularProgress, Box} from "@material-ui/core";
import {ArrowBackIos} from "@material-ui/icons";

const PostDetail = ({currentPost, loaded}) => {
  if (!currentPost || !loaded) return <CircularProgress color="secondary"/>
  return (
    <Grid>
      <Link to={'/'}>
        <ArrowBackIos color="secondary"/>
        <Typography color="secondary" display="inline">Back</Typography>
      </Link>
      <Box m={5} />
      <Typography variant="h5" component="h2">{currentPost.title}</Typography>
      <Box m={5} />
      <Typography>{currentPost.description}</Typography>
    </Grid>
  );
}

export default PostDetail;