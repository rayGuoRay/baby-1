var url = 'http://localhost:80/';

export default {
	user: {
		authenticated: false
	},
	token: '',
	login: url + 'src/data/data.json',
	signup: url + 'signup',
	logout: url + 'logout'
}