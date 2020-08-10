class Bowser {
    coord;
    image;
    sound;
    constructor() {
		this.image = new Image();   // Create new image element
        this.image.src = 'assets/bowser.png';
        this.sound = new Audio();
        // this.sound.src = "assets/bowser.mp3"
		this.coord = {
			x: 300,
			y: 285,
			w: 60,
            h: 60,
            velX: 5,
            velY: 5,
            speed: 7,
        }
        // if(this.coord.y - this.coord.width < 0 || this.coord.y + this.coord.width > canvas.height) {
        //     this.coord.velY = -this.coord.velY;
        //}  

        // walk();

    }

    
}