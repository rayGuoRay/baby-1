//获取token
function getToken(){
	return localStorage.getItem('token')
}
//返回
function back(){
	window.history.back();
}
exports.getToken = getToken;
exports.back = back;