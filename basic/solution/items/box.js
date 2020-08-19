class Box {
    coord;
    image;
    sound;
    constructor() {        
        this.image = new Image();   // Create new image element
        this.image.src = 'assets/box.png'; 
        this.sound = new Sound("assets/plim.mp3");
        
        this.coord = {
            x : 280,
            y : 220,
            w : 60,
            h : 60,
        }
        
    
    }

    coin () {
        if (this.coord.x == mario.coord.x && this.coord.y == mario.coord.y) {
            this.image.src = "assets/coin.png";
            this.sound.play();
            setTimeout(function(){
                this.box.image.src = "assets/box.png";
            }, 600)
        }
    }
 

}