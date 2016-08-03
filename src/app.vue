<template>
<div>
	<router-view class="view" id="view" keep-alive :transition="effect" transition-mode="out-in"></router-view>
	<foot :tabbar.sync="1"></foot>
</div>
</template>
<script>
	module.exports = {
		data: function(){
			footerShow: true
		},
		components: {
			foot: require('./components/footer.vue')
		}
	}
</script>