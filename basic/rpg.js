// Set source path
var canvas = document.getElementById("rpg");
var ctx;

if (canvas.getContext) {
    ctx = canvas.getContext("2d");
}


var mario = new Mario('assets/mario.png');  
var box = new Box('assets/box.png');


window.addEventListener('keydown', getKeyboardKey);

function getKeyboardKey (evt) {
    var rect = canvas.getBoundingClientRect ();
    
    evt = evt || window.event;
    if (evt.keyCode == '38') { //uparrow
        mario.jump();
    } 
    else if (evt.keyCode == '37') { //leftarrow
        
        mario.turn('left');
        mario.walk(mario.direction);
        

    } else if (evt.keyCode == '39') { //rightarrow

        mario.turn('right');
        mario.walk(mario.direction);
    }

}

function update () {

    if (box.coord.x == mario.coord.x) {
        console.log ("hit");
    }
}



function drawRect (x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}


function render () {
    drawRect (0, 0, canvas.width, canvas.height, "LIGHTBLUE");
    ctx.drawImage(mario.image, mario.coord.x, mario.coord.y, mario.coord.w, mario.coord.h);   
    ctx.drawImage(box.image, box.coord.x, box.coord.y, box.coord.w, box.coord.h);
}

function game () {
    render ();
    update ();
}

var loop = setInterval(() => {
    game();
 }, 1000/50);


