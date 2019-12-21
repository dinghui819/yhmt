let items = document.getElementsByClassName('item') //图片
let prev = document.getElementById('prev') 	//按钮
let next = document.getElementById('next')
let points = document.getElementsByClassName('point') //小圆点
let move = document.getElementById("lists-move") 
let time = 0
let index = 0 //index表示第几张图片在展示，第index张图片就有active类名    //第几个点在展示
let clearActive = function () {
	for (let i = 0; i < items.length; i++) {
		items[i].className = 'item'
	}
	for (let j = 0; j < points.length; j++) {
		points[j].className = 'point'
	}
}
let goIndex = function () {
//	for (let i = 0; i < items.length; i++) {
//		items[i].className = 'item'
//	}
	//把全部的active去掉，为显示的那个添加active
	clearActive()
	items[index].className = 'item active'
	points[index].className = 'point active'
}

//下一张
let nextBtn = function () {
	if (index < 4) {
		index++
	} else {
		index = 0
	}
	goIndex()
}
//上一张
let prevBtn = function () {
	if (index <= 0) {
		index = 4
	} else {
		index--
	}
	goIndex()
}
//为左右按钮添加点击事件
next.addEventListener('click', function () {
	nextBtn()
})
prev.addEventListener('click',function () {
	prevBtn()
})
//点击圆点，显示对应的图片
for (let i = 0; i < points.length; i++) {
	points[i].addEventListener('click', function () {
		let pointIndex = this.getAttribute("data-index")
		index = pointIndex
		goIndex()
	})
}

//定时器,让图片自动轮播
let setIntervalTime = function () {
		timer = setInterval(function(){
			time++
			if(time == 20){
				nextBtn()
				time = 0
			}	
		},100)
	}
setIntervalTime()
move.onmouseenter = function(){
	clearInterval(timer)
}
move.onmouseleave = function () {
	setIntervalTime()
}