import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const URL_POSTS = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=TESTKEYTOKEN0987';

export function fetchPosts() {

  const request = axios.get(`${URL_POSTS}/posts${API_KEY }`);

  return {
    type: FETCH_POST,
    payload: request
  };
}