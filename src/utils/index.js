import axios from 'axios';

const url = 'https://social-network.samuraijs.com/api/1.0/';
const instance = axios.create({});
// const api = process.env.REACT_APP_BASE_URL;
const tokenTrue = 'Bearer_';

instance.interceptors.request.use((config) => {
  config.headers['Authorization'] = `${tokenTrue}${
    JSON.parse(localStorage.getItem('user')).token
  }`;
  return config;
});

export default instance;
export { url };
