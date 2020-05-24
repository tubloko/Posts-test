import React, {useState} from 'react';

import InputFilterContainer from "../InputFilter";
import PostListItem from "../PostListItem";
import PaginationControllerContainer from "../PaginationController";

import {Grid, Box, AppBar, makeStyles, Button} from "@material-ui/core";
import CreateNewPostModalContainer from "../CreateNewPostModal";

const useStyles = makeStyles({
  appBar: {
    top: 'auto',
    bottom: 50,
  },
  headerBar: {
    display: 'grid',
    gridTemplateColumns: '50% 50%',
  },
  createNewPostButton: {
    justifySelf: 'right',
  }
});

const PostList = ({postList, deletePost, loaded}) => {
  const [isModal, setIsModal] = useState(false);
  const classes = useStyles();

  return (
    <>
      {isModal ? <CreateNewPostModalContainer openModal={isModal} setOpenModal={setIsModal}/> : null}
      <Grid className={classes.headerBar}>
        <InputFilterContainer/>
        <Box mt={5} className={classes.createNewPostButton}>
          <Button
            onClick={() => setIsModal(!isModal)}
            variant="contained"
            size="large"
            color="secondary"
          >
            Create New Post
          </Button>
        </Box>
      </Grid>
      <PostListItem postList={postList} loaded={loaded} deletePost={deletePost}/>
      <AppBar color="transparent" position="fixed" className={classes.appBar}>
        <Grid container
              direction="row"
              justify="center"
              alignItems="flex-end"
        >
          <PaginationControllerContainer/>
        </Grid>
      </AppBar>
      <Box mb={5}/>
    </>
  );
}

export default PostList;