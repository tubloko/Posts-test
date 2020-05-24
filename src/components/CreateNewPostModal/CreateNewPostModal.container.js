import React from 'react';
import { useDispatch } from "react-redux";

import { createPost } from "../../redux/actionCreators/actionCreators";

import CreateNewPostModal from "./CreateNewPostModal";

const CreateNewPostModalContainer = ({ openModal, setOpenModal }) => {
  const dispatch = useDispatch();
  const createNewPost = ({ title, description, id }) => dispatch(createPost({ title, description, id }));

  return (
    <CreateNewPostModal
      createNewPost={createNewPost}
      openModal={openModal}
      setOpenModal={setOpenModal}
    />
  );
}

export default CreateNewPostModalContainer;