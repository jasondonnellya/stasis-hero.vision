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

/** open links */

function openLink(link) {
    return window.open(link)
}

function openTwitter() {
    return openLink(`https://twitter.com/StasisHeroDev/`);
}

function openReddit() {
    return openLink(`https://www.reddit.com/r/StasisHero/`);
}

function openGithub() {
    return openLink(`https://github.com/jasondonnellya/stasis-hero.vision/commits/master/`);
}

/** */

const globalSpacing = 3;

module.exports = { _registerAPI_URL, _generateTailwindSafelist, openLink, openTwitter, openReddit, openGithub, globalSpacing }