import axios from 'axios';


let url="https://localhost:5001";

const instance = axios.create({
  baseURL: url,
});
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.get['Accepts'] = 'application/json'
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8'

instance.interceptors.request.use(
  async (config) => {
    
    const token = window.localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;