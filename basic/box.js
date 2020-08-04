class Box {
    coord;
    image;
    sound;
    constructor(imageSrc) {        
        this.image = new Image();   // Create new image element
        this.image.src = imageSrc; 
        this.sound = new Audio();
        this.sound.src = "assets/plim.mp3";
        this.coord = {
            x : 280,
            y : 160,
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