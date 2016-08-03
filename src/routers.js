module.exports = function(router){
	router.map({
		'/home':{
			name:'home',
			component: require('./views/home.vue')
		},
		'/login':{
			name: 'login',
			component: require('./views/login.vue')
		},
		'/register': {
			name: 'register',
			component: require('./views/register.vue')
		},
		'/perfectmsg': {
			name: 'perfectmsg',
			component: require('./views/perfectmsg.vue')
		},
		'/album': {
			name: 'album',
			component: require('./views/album.vue')
		},
		'/friend': {
			name: 'friend',
			component: require('./views/friend.vue')
		},
		'/mine': {
			name: 'mine',
			component: require('./views/mine.vue')
		}
	});


	router.redirect({
		'*': '/home'
	});

	window.routeList=[];
	router.beforeEach(function(transition){
		console.log(transition);
		console.log('before---------------');
		//可以通过在路由中的自定义字段来验证用户是否需要登陆
		// if(transition.to.auth){
		// 	console.log('通过配置路由中自定义的字段验证是否需要登陆');
		// }

		// //如果是中止，这里可以判断用户登录
		// //if(transition.to.path === '/forbidden'){
		if(transition.to.name == 'forbidden'){
			router.app.authenticating = true
			setTimeout(function(){
				router.app.authenticating = false
				alert('此路由在全局中设置为中止');
				transition.abort();
			},1500);
		}

		if(routeList.length > 1 && transition.to.name==routeList[routeList.length-2]['name']){
			router.app.effect='back';
			routeList.splice(routeList.length-1,1);
			console.log(routeList);
		} else {
			router.app.effect='fade';
			routeList.push({
				name : transition.to.name,
				path : transition.to.path,
				query : transition.to.query,
				params : transition.to.params,
				timer: +new Date
			});
		}

		//setTimeout(function(){
			transition.next();
		//},1000);
	});


	//可以记录访问路径
	router.afterEach(function(transition){
		console.log('-----------------after');
		for (var i = 0; i < routeList.length; i++) {
			console.log(routeList[i].name);
		};
	});

	return router;
}