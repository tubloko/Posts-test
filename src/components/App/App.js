import React from 'react';
import { Route } from 'react-router-dom';

import PostListContainer from "../PostList";
import PostDetailContainer from "../PostDetail";

import { Container, Typography } from "@material-ui/core";

const App = () => {
  return (
    <Container>
      <Typography align="center" variant="h3" component="h1" color="secondary">Post List</Typography>
        <Route exact path={'/'} component={PostListContainer} />
        <Route path={'/post/:id'} component={PostDetailContainer} />
    </Container>
  );
}

export default App;
