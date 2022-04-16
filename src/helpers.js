export function _registerHelpers() {
    window.API_URL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:1337';
}