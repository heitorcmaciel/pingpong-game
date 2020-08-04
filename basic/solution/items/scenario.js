class Scenario {

  bgSound;
  image;
  coord;
  constructor () {
    this.bgSound = new Sound("assets/bgmusic.mp3");
    this.image = new Image();
    this.image.src = "assets/phase-1.png";

    this.coord = {
      x: 0,
      y: 0,
      w: 2090,
      h: 400
    }
  }


  scroll (direction) {
    if (direction == 'left') {
      this.coord.x += 20;
    } else {
      this.coord.x -= 20;
    }
  }

}