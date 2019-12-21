//js封装tab切换
function changeClass (parentClass) {
	let parent = document.querySelector(parentClass)
	let tabTitle = parent.querySelectorAll('.tab-title')
	let tabCon = parent.querySelectorAll('.tab-con')
	for (let i = 0; i < tabTitle.length; i++) {
		tabTitle[i].index = i //自定义属性
		tabTitle[i].onmouseenter = function () {
			for (let j = 0; j < tabCon.length; j++) {
				tabCon[j].classList.remove('active')
			}
//			this.classList.add('active')
			tabCon[this.index].classList.add('active')
		}
	}
}
changeClass('.tab-box')
changeClass('.tab-box1')

