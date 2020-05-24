const selectFilter = (state) => state.filterReducer.filter;
const selectPosts = (state) => state.postReducer.posts;
const selectCurrentPage = (state) => state.postReducer.currentPage - 1;

export const selectByFilter = (state) => {
  const filter = selectFilter(state);
  const posts = selectPosts(state);

  if (!posts || !posts.length) return posts;

  return posts.filter(({title, description}) => {
    return title.toLowerCase().startsWith(filter.toLowerCase())
      || title.toLowerCase().includes(filter.toLowerCase())
        || description.toLowerCase().includes(filter.toLowerCase())
  });
}

export const selectItems = (state) => {
  const currentPage = selectCurrentPage(state);
  const currentData = selectByFilter(state);

  return currentData.slice(currentPage * 6, currentPage * 6 + 6);
}