var url = 'http://localhost:80/';

export default {
	user: {
		authenticated: false
	},
	token: '',
	login: url + 'src/data/data.json',
	// login: 'http://124.207.17.52/HSUSER/login/doLogin.action',
	register: url + 'src/data/data.json',
	signup: url + 'signup',
	logout: url + 'logout'
}