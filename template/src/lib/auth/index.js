import { route } from 'preact-router';
import auth0 from 'auth0-js';

const auth = new auth0.WebAuth({
	domain: '{{ auth0 domain }}',
	clientID: '{{ auth0 client id }}',
	redirectUri: 'http://localhost:8080/callback',
	audience: 'https://{{ auth0 domain }}/userinfo',
	responseType: 'token id_token',
	scope: 'openid profile' // only use `openid` if you don't need user profile
});

function login() {
	auth.authorize();
}

function handleAuthentication() {
	auth.parseHash((err, authResult) => {
		if (err) {
			route('/', true);
			console.error(err);
			return;
		}
		if (authResult && authResult.accessToken && authResult.idToken) {
			setSession(authResult);
			route('/', true);
		}
	});
}

function setSession(authResult) {
	// Set the time that the access token will expire at
	let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
	localStorage.setItem('access_token', authResult.accessToken);
	localStorage.setItem('id_token', authResult.idToken);
	localStorage.setItem('expires_at', expiresAt);
}

function logout() {
	// Clear access token and ID token from local storage
	localStorage.removeItem('access_token');
	localStorage.removeItem('id_token');
	localStorage.removeItem('expires_at');
	// navigate to the home route
	route('/', true);
}

function isAuthenticated() {
	if (typeof localStorage === 'undefined') {
		return false;
	}
	// Check whether the current time is past the
	// access token's expiry time
	let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
	return new Date().getTime() < expiresAt;
}

function getAccessToken() {
	const accessToken = localStorage.getItem('access_token');
	if (!accessToken) {
		throw new Error('No access token found');
	}
	return accessToken;
}

function getProfile() {
	const accessToken = getAccessToken();
	return new Promise((resolve, reject) => {
		auth.client.userInfo(accessToken, (err, profile) => {
			if (err) {
				return reject(err);
			}
			return resolve(profile);
		});
	});
}

export {
	login,
	handleAuthentication,
	logout,
	isAuthenticated,
	getAccessToken,
	getProfile
};
