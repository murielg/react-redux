import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://localhost:3000';
export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}`+'/token',{
    headers: { "Authorization" : "Basic dXNlckBleGFtcGxlLmNvbTpwYXNzd29yZA" }
  }).then(function(response){
   localStorage.setItem('apiToken', response.data.token);
    axios.get(`${ROOT_URL}`+'/posts', {
      headers: { "Authorization" : `Token token=${localStorage.getItem('apiToken')}` }
    }).then(function(response){
      console.log(response.data);
    });
  });
  

  return {
    type: FETCH_POSTS, 
    payload: request
  }
}

