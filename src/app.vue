<template>
<div>	
	<div>test baby</div>
	<p>当前路径: {{$route.path}}</p>
	<router-view class="view" id="view" keep-alive :transition="effect" transition-mode="out-in"></router-view>
</div>
</template>
<script>
	module.exports = {
		
	}
</script>