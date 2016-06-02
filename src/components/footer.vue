<style>
.footbar {
	width: 100%;
	height: 38px;
	line-height: 38px;
	padding-top: 4px;
	border-top: 1px solid #E7E7E7;
    border-bottom: 1px solid #F8F8F8;
	position: fixed;
	left: 0;
	bottom: 0;
	font-size: 15px;
	background: #fff;
}
.footbar .tabbar {
	width: 25%;
	height: 100%;
	color: #5D656B;
    text-align: center;
}
</style>
<template>
	<footer class="footbar cf">
		<div class="fl tabbar {{tabbar=='1' ? nowbar : ''}}">广场</div>
		<div class="fl tabbar {{tabbar=='2' ? nowbar : ''}}">相册</div>
		<div class="fl tabbar {{tabbar=='3' ? nowbar : ''}}">好友</div>
		<div class="fl tabbar {{tabbar=='4' ? nowbar : ''}}">我的</div>
	</footer>
</template>
<script>
	import router from '../app'
	import api from '../api'
	module.exports = {
		props: {
			tabbar: {
				require:true,
				type:Number
			}
		},
		data: function(){
			return {
				tab: true
			}
		},
		methods: function(){

		}
	}
</script>