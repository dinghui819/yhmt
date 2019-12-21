//侧边栏
//返回顶部
let returnTop = document.getElementById('returnTop')
returnTop.onclick = function () {
//	scrollTop() 方法返回或设置匹配元素的滚动条的垂直位置
	document.body.scrollTop = 0
//	console.log(document.body)打印出来是body标签里面的内容
	document.documentElement.scrollTop = 0;
//	console.log(document.documentElement)打印出来是html文档里面的所有内容
}

