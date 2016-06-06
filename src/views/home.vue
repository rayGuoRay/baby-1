<template>
<div>
	<div class="header">广场</div>
	<div @click="getdata()">tologin</div>
	<foot :tabbar.sync="1"></foot>
	<login></login>
</div>
</template>
<script>
	import {router} from '../app'
	import api from '../api'
	module.exports = {
		data: function(){
			return {
				title: 'home'
			}
		},
		methods: {
			getdata: function(){
				var param = {
					token: api.getToken()
				}
				this.$route
				this.$http.get(api.API_URL + 'src/data/data.json', param, function(data) {
					console.log(data);
					console.log(router);
				}).error(function(data, status) {
					console.log(data + "---" + status);
				})
			}
		},
		components: {
			login: require('../components/login.vue'),
			foot: require('../components/footer.vue')
		}
	}
</script>