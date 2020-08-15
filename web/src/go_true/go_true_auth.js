import GoTrue from 'gotrue-js';

const auth = new GoTrue({
  APIUrl: 'https://upbeat-mclean-c96849.netlify.app/.netlify/identity',
  audience: '',
  setCookie: false
})

export default auth;