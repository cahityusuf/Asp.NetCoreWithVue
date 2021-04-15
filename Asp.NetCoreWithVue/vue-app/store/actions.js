import Axios from "axios";

export const loadBlogs = ({ commit }, origin) => {
  if (origin === null || origin === undefined) {
    origin = "";
  }
  return Axios.get(`${origin}/blog/get`)
    .then((res) => {
      commit("saveBlogs", res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const loadBlog = ({ commit }, { origin, id }) => {
  if (origin === null || origin === undefined) {
    origin = "";
  }
  return Axios.get(`${origin}/${id}`)
    .then((res) => {
      commit("saveBlog", res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
