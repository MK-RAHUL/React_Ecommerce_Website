import axios from "axios";

const instance = axios.create({
    baseURL: 'http://192.168.0.21/Estore',
     headers : { 'Authorization': `Bearer ${localStorage.getItem('Token')}` }
  });

export default instance