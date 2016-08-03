<template>
<div>
	<router-view class="view" id="view" keep-alive :transition="effect" transition-mode="out-in"></router-view>
</div>
</template>
<script>
	module.exports = {
		data: function(){
			footerShow: true
		}
	}
</script>