import decode from 'jwt-decode';

class Auth {
    getUser() {
        return decode(this.getToken());
    }

    isLoggedIn() {
        const token = this.getToken();
        return token && !this.isTokenExpired(token) ? true : false;
    }

    isTokenExpired(token) {
        const decoded = decode(token);
        if (decoded.exp < Date.now()/1000) {
            localStorage.removeItem('id_token');
            return true;
        }
        return false;
    }

    getToken() {
        return localStorage.getItem('token');
    }

    login(token) {
        localStorage.setItem('token', token);
        window.location.assign('/');
    }

    logout() {
        localStorage.removeItem('token');
        window.location.reload();
    }
}

export default new Auth();