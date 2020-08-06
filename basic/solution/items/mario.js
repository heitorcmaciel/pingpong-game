class Mario {
	coord;
	image;
	direction;
	walking;
	sound;
	constructor() {
		this.image = new Image();   // Create new image element
		this.image.src = 'assets/mario.png';
		this.direction = 1;

		this.sound = new Sound("assets/jump.mp3");

		this.walking = null;
		this.coord = {
			x: 200,
			y: 285,
			w: 60,
			h: 60,
			velX: 5,
			velY: 5,
			speed: 7
		}
	}



	walk(direction) {

		if (this.walking == null) {
			this.walking = setInterval(function () {

				if (direction < 0) this.mario.coord.x -= 5;
				if (direction > 0) this.mario.coord.x += 5;


			}, 1000 / 50);

			setTimeout(() => {
				clearInterval(this.walking);
				this.walking = null;
			}, 600);
		}

	}

	jump() {

		if (this.coord.y == 285) {

			this.coord.y = (this.coord.y - 30);

			this.sound.play();

			setTimeout(function () {
				this.mario.coord.y = (this.mario.coord.y + 30);
			}, 600);

		}
	}

	turn(dir) {
		if (dir == 'left') {
			this.coord.w = this.coord.w * -1;
			this.direction = -1;
			this.coord.x = (this.coord.x - this.coord.w);
			this.image.src = 'assets/mario2.png';
		} else if (dir == 'right') {
			this.coord.w = this.coord.w * -1;
			this.direction = 1;
			this.coord.x = (this.coord.x - this.coord.w);
			this.image.src = 'assets/mario.png';
		}
	}


}
