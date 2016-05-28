<style>
.title {
	color:red;
}
</style>
<template>
<div>
	<div class="title">this is login page</div>
	<div @click="login()">登录</div>
</div>
</template>

<script>
	import api from '../api'
	export default {
		date() {
			return {

			}
		},
		methods: {
			login() {
				var param = {
					name: 'zhanlei',
					pwd: '11111'
				};
				console.log(window.routeList);
				console.log(window.routeList.length-2);
				console.log(window.routeList[window.routeList.length-2]);
				api.login(this, param, window.routeList[window.routeList.length-2].name);
			}
		}
	}
</script>