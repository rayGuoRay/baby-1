<style>
.loginbg {
	width: 100%;
	height: 100%;
	position: fixed;
	left: 0;
	top: 0;
	background: #fff;
	z-index: 1;
}
.loginbg .close {
	width:50px;
	font-size: 40px;
	padding-left: 10px;
}
.loginmsg {
	width: 90%;
	position: fixed;
	top: 60px;
	left: 5%;
	z-index:2;
}
.loginmsg .title {
	color: #ffc028;
	font-size: 20px;
	text-align: center;
	margin-bottom: 40px;
}
.loginmsg input {
	width: 99%;
	height: 36px;
	line-height: 36px;
	margin-bottom: 15px;
}
.loginmsg .loginbtn {
	width: 100%;
	height: 40px;
	line-height: 40px;
	font-size: 16px;
	color: #fff;
	border-radius: 4px;
	background: #ca5490;
	text-align: center;
}
.loginmsg .regist {
	margin-top: 10px;
	color: #ca5490;
	font-size: 16px;
}
.loginmsg .forgetpwd {
	margin-top: 10px;
	color: #b8b8b8;
	font-size: 16px;
}
.thirdlogin {
	width: 100%;
	position: fixed;
	left: 0;
	bottom: 0;
	z-index: 2;
}
.thirdlogin .line {
	width: 100%;
	border-top: 1px solid #999999;

}
.thirdlogin .linetitle {
	width: 40%;
	position: absolute;
	left: 30%;
	text-align: center;
	margin-top: -11px;
	background: #fff;
}
.thirdlogin .thirdpart {
	margin-top: 50px;
}
.thirdlogin .thirdpart .qqpart {
	width: 50%;
	height: 100px;
	text-align: center;
}
</style>
<template>
<div v-show="loginmodel">
	<div class="loginbg">
		<div class="close fl" @click="closeLogin()">×</div>
	</div>
	<div class="loginmsg">
		<div class="title">baby相册登陆</div>
		<input type="text" placeholder="请输入手机号" v-model="phoneno" />
		<input type="password" placeholder="请输入密码" v-model="pwd" />
		<div class="loginbtn" @click="login();">登陆</div>
		<a class="regist fl" v-link="{name: 'register'}">新注册账号</a>
		<a class="forgetpwd fr">忘记密码</a>
	</div>
	<div class="thirdlogin">
		<div class="line"></div>
		<div class="linetitle">第三方账号登录</div>
		<div class="thirdpart cf">
			<div class="partitem fl">qq</div>
			<div class="partitem fl">微博</div>
		</div>
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
				loginmodel: true,
				phoneno: '',
				pwd: ''
			}
		},
		methods: {
			closeLogin: function(){
				this.loginmodel = false;
			},
			login : function(){
				var param = {
					phoneno: this.phoneno,
					pwd: this.pwd
				}
				console.log(param);
				this.$http.get(api.login, param).then( function(data) {
					console.log(data)
					localStorage.setItem('token', data.token)
					api.token = data.token;
					console.log(router.go);
					router.go('home');
					if (redirect) {
						router.go(redirect)
					}
				}, function (err, statue) {
					if(statue) {

					}
				})
			}
		}
	}

</script>