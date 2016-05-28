<template>
<div>
	<div>{{title}}</div>
	<div @click="getdata()">tologin</div>
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
				this.$http.get(api.API_URL + 'src/data/data.json', param, function(data) {
					console.log(data);
					console.log(router);
					router.go('/login');
				}).error(function(data, status) {
					console.log(data + "---" + status);
				})
			}
		}
	}
</script>