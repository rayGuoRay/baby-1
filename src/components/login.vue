<style>
.loginbg {
	width: 100%;
	height: 100%;
	position: fixed;
	left: 0;
	top: 0;
	background: #000;
	opacity: 0.3;
	z-index: 1;
}
.loginMsg {
	width: 300px;
	height: 200px;
	position: fixed;
	top: 50%;
	left: 50%;
	margin-left: -150px;
	margin-top: -150px;
	background: #fff;
	z-index:2;
}
.loginMsg input {
	width: 90%;
	height: 30px;
	line-height: 30px;
	margin-bottom: 15px;
}
.loginMsg .loginbtn {
	width: 90%;
	height: 30px;
	line-height: 30px;
	font-size: 15px;
	color: #fff;
	border-radius: 4px;
	background: #f1f1f1;
	text-align: center;
}
</style>
<template>
<div>
	<div class="loginbg"></div>
	<div class="loginMsg">
		<input type="text" placeholder="请输入手机号" v-model="phoneno" />
		<input type="password" placeholder="请输入密码" v-model="pwd" />
		<div class="loginbtn" @click="login();">登陆</div>
	</div>
</div>
</template>
<script>
	import {router} from '../app'
	import api from '../api'
	module.exports = {
		props: {
			redirect: []
		},
		data: function(){
			return {

			}
		},
		methods: {
			login : function(){
				var param = {
					phoneno: this.phoneno,
					pwd: this.pwd
				}
				console.log(param);
				this.$http.get(api.login, param, (data) => {
					localStorage.setItem('token', data.token)
					api.token = data.token;

					if (redirect) {
						router.go(redirect)
					}
				}).error((err) => {
					//context.error = err
					context.error = '用户不存在或密码不正确!'
				})
			}
		}
	}

</script>