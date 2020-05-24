import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PostList from "./PostList";

import {selectItems} from "../../selectors/postsSelector";
import {deleteOnePost, getAllPostsLoading} from "../../redux/actionCreators/actionCreators";

const PostListContainer = () => {
  const dispatch = useDispatch();
  const getPostList = () => dispatch(getAllPostsLoading());
  const deletePost = (id) => dispatch(deleteOnePost(id))

  const postList = useSelector(state => selectItems(state));
  const loaded = useSelector(state => state.postReducer.loaded);
  const loading = useSelector(state => state.postReducer.loading);

  useEffect(() => {
    getPostList();
  }, []);

  return (
    <PostList
      postList={postList}
      deletePost={deletePost}
      loaded={loaded}
      loading={loading}
    />
  );
}

export default PostListContainer;