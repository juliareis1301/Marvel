import axios from 'axios';
import md5 from 'md5';

const publicKey = '4aff9a18901329e6f2526b0a14ac90c1';  //42defc5bb2a26a72b49da38fb15e06a4
const privatekey = 'f7d088d6e84ad7f3947366e2893b0e06b2dfdb6a'; // 788eff2764301f0f33a60eb146f9cba2c70dce30

const ts = Number(new Date());

const hash = md5(ts + privatekey + publicKey );

const api = axios.create({
  baseURL: `http://gateway.marvel.com/v1/public/`,
  params: {
    ts,
    apikey: publicKey,
    hash,
  }
})

export default api;


//http://gateway.marvel.com/v1/public/characters?ts=1&apikey=42defc5bb2a26a72b49da38fb15e06a4&hash=9b782314c419379e66efc10e8ea62c4c