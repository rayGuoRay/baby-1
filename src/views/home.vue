<style>
	.test{
		margin-top: 100px;
	}
</style>
<template>
<div>
	<div class="header">广场</div>
	<div class="test" @click="getdata()">tologin</div>
</div>
</template>
<script>
	import {router} from '../app'
	import api from '../api'
	import common from '../common'
	module.exports = {
		data: function(){
			return {
			}
		},
		methods: {
			getdata: function(){
				var param = {
					token: common.getToken()
				}
				
				this.$http.get(api.login, param, function(data) {
					console.log(data);
					console.log(router);
					router.go('login');
				}).error(function(data, status) {
					console.log(data + "---" + status);
				})
			}
		},
		components: {
			login: require('../components/login.vue')
		}
	}
</script>