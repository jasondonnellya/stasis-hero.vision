const axios = require('axios');

function _registerAPI_URL() {
    window.API_URL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:1337';
    return axios.defaults.withCredentials = true;
}

function _generateTailwindSafelist() {
    let classes = ['m', 'mr', 'mt', 'ml', 'mb', 'p', 'pr', 'pt', 'pl', 'pb']
    classes = classes.map(c => `${c}-${globalSpacing}`)
    return classes
}

function openReddit() {
    return window.open('https://www.reddit.com/r/StasisHero/');
}

const globalSpacing = 3;

module.exports = { _registerAPI_URL, _generateTailwindSafelist, openReddit, globalSpacing }