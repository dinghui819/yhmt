
let api = 'http://127.0.0.1:3001/';
for (var j = 0; j < 3; j++) {
	sendAjax(j)
}
function sendAjax(id) {
	$.ajax({
		//请求类型
		type:"get",
		//请求地址
		url:api + "lists?id="+id,
		//请求是同步还是异步
		async:true,
		//请求返的类型
		dataType: 'json',
		//请求成功回调
		success: function (res) {
			
			if (res.success) {
				let lists = res.list
				let html = ''
				for (let i =0; i < lists.length; i++){
					html += `
							<li>
								<img src="${api+lists[i].img}" class="good-img"/>
								<div class="img-text line-16">
									<p class="goods-title hidden padding-5-t">${lists[i].title}</p>
									<span class="text-main font-14 bold display">￥${lists[i].price}</span>
								</div>
							</li>
					`
				}
				$('.recommend-lists').eq(id).html(html)
			}
		}
	});

}
