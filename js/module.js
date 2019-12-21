
////上一页 下一页
let pages = document.getElementsByClassName("page")
let prevBtn = document.getElementById("pagePrevBtn")
let nextBtn = document.getElementById("nextNextBtn")

let index = 0

let clearActive = function(){
	for(let i = 0; i<pages.length;i++){
		pages[i].className = "page"
	}
}

let pageIndex = function(){
	clearActive()
	pages[index].className ="page active"
}

let pagePrev = function(){
	if(index <= 0){
		alert("这已经是第一页")
	}else{
		index--
	}
	pageIndex()
}
let pageNext = function(){
	if(index > 3){
		alert("这已经是最后一页了")
	}else{
		index++
	}
	pageIndex()
}
//
prevBtn.addEventListener("click",function(){
	pagePrev()
})
nextBtn.addEventListener("click",function(){
	pageNext()
})