//获取token
function getToken(){
	return localStorage.getItem('token')
}

exports.getToken = getToken;