<style>
	.back {
		position: fixed;
		top: 0;
		left: 0;
		height: 44px;
		width: 30px;
		line-height: 44px;
		background: url(../img/back_arrow.png) no-repeat;
		background-position: 14px;
	}			
</style>
<template>
	<div class="back" @click="back();"></div>
</template>
<script>
	import common from '../common'
	module.exports = {
		methods: {
			back: function(){
				common.back();
			}
		}
	}
</script>