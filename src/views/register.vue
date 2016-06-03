<style>
	.registphoneno {
		width: inherit;
		margin-top: 50px;
		padding: 20px 15px;
		line-height: 40px;
		font-size: 18px;
	}
	.registphoneno .frontphone {
		height: 40px;
		width: 100px;
		text-align: center;
		background: #fff;
		border-radius: 30px;
	}
	.registphoneno .input {
		width: inherit;
		height: 40px;
		line-height: 40px;
		margin-left: 110px;
		border-radius: 30px;
	}
	.registphoneno input {
		padding-left: 10px;
		border: 0;
		width: 100%;
		height: 40px;
		border-radius: 30px;
	}
	.registbtn {
		width: inherit;
		margin: 30px 15px;
		line-height: 45px;
		font-size: 20px;
		color: #fff;
		text-align: center;
		background: #ffc028;
		border-radius: 30px;
	}
</style>
<template>
<div>
	<div class="header">注册</div>
	<div class="back"></div>
	<div class="registphoneno">
		<div class="frontphone fl">中国+86</div>
		<div class="input">
			<input type="tel" placeholder="填写手机号码" v-model="phoneno"/>
		</div>
	</div>
	<div class="registbtn" @click="register()">注册</div>
</div>
</template>
<script>
	module.exports = {
		data: function(){
			return {

			}
		},
		methods: {
			register: function(){
				
			}
		}
	}
</script>