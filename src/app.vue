<template>
<div>	
	<div>test baby</div>
	<p>当前路径: {{$route.path}}</p>
	<router-view class="view" id="view" keep-alive :transition="effect" transition-mode="out-in"></router-view>
	<div class="loginModel" v-show="loginModel">
		<div class="loginbg"></div>
		<div class="loginMsg">
			<div>
				<input type="text" placeholder="请输入手机号" />
			</div>
			<div>
				<input type="password" placeholder="请输入密码" />
			</div>
		</div>
	</div>
	<footer class="footbar cf" v-show="footerShow">
		<div class="fl tabbar"></div>
		<div class="fl tabbar"></div>
		<div class="fl tabbar"></div>
		<div class="fl tabbar"></div>
	</footer>
</div>
</template>
<style>
	.footbar {
		width: 100%;
		position: fixed;
		left: 0;
		bottom: 0;
	}
	.tabbar {
		width: 25%;
	}
</style>
<script>
	module.exports = {
		data: function(){
			footerShow : true,
			loginModel : true
		}
	}
</script>