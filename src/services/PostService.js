import axios from 'axios';

const url = 'http://localhost:3001'
class PostService {
  getAllPosts() {
    return axios.get(`${url}/posts`)
      .then(res => res.data)
      .catch(err => err);
  }
  addPost({ title, description, id }) {
    return axios.post(`${url}/posts`, { title, description, id })
      .then(() => 'post was added successfully !')
      .catch(err => err);
  }
  deletePost(id) {
    return axios.delete(`${url}/posts/${id}`)
      .then(() => 'post was deleted successfully !')
      .catch(err => err);
  }
  getOnePost(id) {
    return axios.get(`${url}/posts/${id}`)
      .then(res => res.data)
      .catch(err => err);
  }
}

export default new PostService();