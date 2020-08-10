// Set source path
var canvas = document.getElementById("rpg");
var ctx;
var sound;


if (canvas.getContext) {
	ctx = canvas.getContext("2d");
}

var bowser = new Bowser();
var scenario = new Scenario();
var mario = new Mario();
var box = new Box();


function replay() {
	scenario.bgSound.play();
}

// function colision(bowser, mario) {
// 	bowser.top = mario.coord.y;
//     bowser.bottom = mario.coord.y + mario.coord.h;
//     bowser.left = mario.coord.x;
//     bowser.right = mario.coord.x + mario.coord.w;

//     bowser.top = bowser.coord.y - bowser.coord.w;
//     bowser.bottom = bowser.coord.y + bowser.coord.w;
//     bowser.left = bowser.coord.x - bowser.coord.w;
// 	bowser.right = bowser.coord.x + bowser.coord.w;
	
// 	return mario.left < bowser.right && mario.top < bowser.bottom && mario.right > bowser.left && mario.bottom > bowser.top;
// }

if(mario.coord.x == bowser.coord.x) {
	console.log ("game over");
}

window.addEventListener('ended', replay);
window.addEventListener('keydown', getKeyboardKey);

function getKeyboardKey(evt) {
	var rect = canvas.getBoundingClientRect();

	evt = evt || window.event;
	if (evt.keyCode == '38') { //uparrow
		mario.jump();
	}
	else if (evt.keyCode == '37') { //leftarrow

		mario.turn('left');
		mario.walk(mario.direction);
		scenario.scroll('left');


	} else if (evt.keyCode == '39') { //rightarrow

		mario.turn('right');
		mario.walk(mario.direction);
		scenario.scroll('right');
	}
	else if (evt.keyCode == '13') {
		scenario.bgSound.play();
	}


}

function update() {
	box.coin();

}



function drawRect(x, y, w, h, color) {
	ctx.fillStyle = color;
	ctx.fillRect(x, y, w, h);
}


function render() {
	// drawRect(0, 0, canvas.width, canvas.height, "LIGHTBLUE");
	ctx.drawImage(scenario.image, scenario.coord.x, scenario.coord.y, scenario.coord.w, scenario.coord.h);
	ctx.drawImage(mario.image, mario.coord.x, mario.coord.y, mario.coord.w, mario.coord.h);
	ctx.drawImage(box.image, box.coord.x, box.coord.y, box.coord.w, box.coord.h);
	ctx.drawImage(bowser.image, bowser.coord.x, bowser.coord.y, bowser.coord.w, bowser.coord.h);
}

function game() {
	render();
	update();
}

var loop = setInterval(() => {
	game();
}, 1000 / 50);

