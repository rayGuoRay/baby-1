<template>
<div>
	<router-view class="view" id="view" keep-alive :transition="effect" transition-mode="out-in"></router-view>
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
			footerShow: true
		}
	}
</script>