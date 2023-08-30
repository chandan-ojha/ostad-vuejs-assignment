import axios from "axios";

// Get Posts
export const getPostList = async () => {
  let url = "https://basic-blog.teamrabbil.com/api/post-list/2";
  let response = await axios.get(url);
  return response.data;
};

//Get Newest Post
export const getNewestPost = async () => {
  let url = "https://basic-blog.teamrabbil.com/api/post-newest";
  let response = await axios.get(url);
  return response.data;
};

//Get Post Detail
export const getPostDetail = async (id) => {
  let url = `https://basic-blog.teamrabbil.com/api/post-detail/${id}`;
  let response = await axios.get(url);
  return response.data;
};

//Get Post Category
export const getPostCategory = async () => {
  let url = "https://basic-blog.teamrabbil.com/api/post-categories";
  let response = await axios.get(url);
  return response.data;
};
