import axios from 'axios';
import md5 from 'md5';

const publicKey = '2ce9bdc2b73e6a6d51ebc983d2833afc';  //42defc5bb2a26a72b49da38fb15e06a4 // 4aff9a18901329e6f2526b0a14ac90c1
const privatekey = '7cd08fbcb7f96bed53f852850d905a04143aa8ae'; // 788eff2764301f0f33a60eb146f9cba2c70dce30 //f7d088d6e84ad7f3947366e2893b0e06b2dfdb6a

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