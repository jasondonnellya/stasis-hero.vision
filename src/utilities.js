const axios = require('axios');

export function _registerAPI_URL() {
    window.API_URL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:1337';
    return axios.defaults.withCredentials = true;
}

export function openReddit() {
    return window.open('https://www.reddit.com/r/StasisHero/');
}

export const globalSpacing = 3;