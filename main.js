//  SETUP
const canvas = document.getElementById('canvas');
const print = data => console.log(data);
// const arr = [];
// for (var i = 1; i < 21; i++) {
// 	arr.push(i)
// };
// arr.sort(() => Math.random()-0.5)
const emptyArr = [];
for (var i = 0; i < 20; i++) {
	let box = document.createElement('div');
	box.setAttribute('class','square-to-sort');
	box.style.height = `${15*(i+1)}px`;

	emptyArr.push(box);
}
const random = () => emptyArr.sort(() => Math.random()-0.5);
random()
emptyArr.forEach(e => canvas.appendChild(e));
