export const saveBlogs = (state, blogs) => {
  state.blogs = blogs;
};

export const saveBlog = (state, blogs) => {
  state.selectedBlog = blogs;
};

export const clearBlog = (state) => {
  state.selectedBlog = null;
};
