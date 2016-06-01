<style>
.header {
	height: 44px;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	text-align: center;
	line-height: 44px;
	font-size: 18px;
	background: #6b7bf1;
}
</style>
<template>
<div>
	<div class="header">广场</div>
	<div @click="getdata()">tologin</div>
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
				this.$http.get(api.API_URL + 'src/data/data.json', param, function(data) {
					console.log(data);
					console.log(router);
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