import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const GET_TOKEN = 'get_token';

const ROOT_URL = 'http://localhost:3000';

export function getToken () {

  const token = axios.create({
    baseURL: `${ROOT_URL}`,
    headers: { "Authorization" : "Basic dXNlckBleGFtcGxlLmNvbTpwYXNzd29yZA" },
    timeout: 5000
  });

  token.get('/token').then(function(response){
    localStorage.setItem('apiToken', response.data.token);
  });

  return {
    type: GET_TOKEN, 
    payload: token
  }

}

export function fetchPosts() {

  const request = axios.get(`${ROOT_URL}`+'/posts', { 
    headers: { "Authorization" : `Token token=${localStorage.getItem('apiToken')}` }
  });

  return {
    type: FETCH_POSTS, 
    payload: request
  }
}

