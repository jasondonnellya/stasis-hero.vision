export function _registerHelpers() {
    window.API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:9000' : '/.netlify/functions';
}