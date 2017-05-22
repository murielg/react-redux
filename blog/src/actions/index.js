import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

export function fetchPosts() {
  //const request = axious.get('/');

  return {
    type: FETCH_POSTS
  }
}

