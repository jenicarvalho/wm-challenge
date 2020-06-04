import axios from 'axios';

const baseApiURL = "http://desafioonline.webmotors.com.br/api/OnlineChallenge";

const api = axios.create({
  baseURL: baseApiURL,
});

export default api;
