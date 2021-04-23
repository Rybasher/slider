import gsap from "gsap";

const body = document.querySelector('body'),
	cursor = document.querySelector('#cursor');

let mouseX = 0, mouseY = 0, posX = 0, posY = 0;


function mouseCoords(e) {
	mouseX = e.pageX; //присваиваем позицию курсора по X
	mouseY = e.pageY; //Присваиваем позицию курсора по Y
}
gsap.to({}, .01, {
	repeat: -1,
	onRepeat: () => {
		posX += (mouseX - posX) / 5;
		posY += (mouseY - posY) / 5;
		gsap.set(cursor, {
			css: {
				left: posX,
				top: posY
			}
		})
	}
})

// for (let i = 0; i < links.length; i++) {
// 	links[i].addEventListener('mouseover', () => {
// 		cursor.classList.add('active');
// 	})
// 	links[i].addEventListener('mouseout', () => {
// 		cursor.classList.remove('active');
// 	})
// }

body.addEventListener('mousemove', e => {
	cursor.classList.remove("hidden");

	mouseCoords(e);  // получаем mouseX & mouseY при каждом движении мыши
})

body.addEventListener('mouseout', e => {
	cursor.classList.add("hidden");
})