import {router} from './app'
export default {
	user: {
		authenticated: false
	},
	token: '',
	API_URL: 'http://localhost:80/',
	login: this.API_URL + 'src/data/data.json',
	signup: this.API_URL + 'signup',
	logout: this.API_URL + 'logout',


	login(context, creds, redirect) {
		var login_url = this.API_URL + 'src/data/data.json';
		context.$http.get(login_url, creds, (data) => {
			localStorage.setItem('token', data.token)
			this.user.authenticated = true

			if (redirect) {
				router.go(redirect)
			}
		}).error((err) => {
			//context.error = err
			context.error = '用户不存在或密码不正确!'
		})
	},

	signup(context, creds, redirect) {
		var signup_url = this.API_URL + 'signup';
		context.$http.post(signup_url, creds, (data) => {
			localStorage.setItem('token', data.token)
			this.user.authenticated = true
			if (redirect) {
				router.go(redirect)
			}
		}).error((err) => {
			//context.error = err
			context.error = '用户名已注册'
		})
	},

	logout() {
		localStorage.removeItem('token')
		this.user.authenticated = false
	},

	checkAuth() {
		var token = localStorage.getItem('token')
		if (token) {
			this.user.authenticated = true
		}
		else {
			this.user.authenticated = false
		}
	},

	getToken() {
		return localStorage.getItem('token')
	}
}