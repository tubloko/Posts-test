import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import PostDetail from "./PostDetail";
import {getOnePost} from "../../redux/actionCreators/actionCreators";

const PostDetailContainer = ({ location }) => {
  const params = location.pathname.split('/')
  const id = params[params.length - 1];
  const dispatch = useDispatch();

  const getPost = () => dispatch(getOnePost(id))
  const currentPost = useSelector(state => state.postReducer.post);
  const loaded = useSelector(state => state.postReducer.loaded);

  useEffect(() => {
    getPost();
  }, [])

  return (
    <PostDetail currentPost={currentPost} loaded={loaded} />
  );
}

export default PostDetailContainer;