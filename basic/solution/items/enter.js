class Enter {
    image;
    sound;
    
    constructor(bgSound) {        
        this.image = new Image();   // Create new image element
        this.image.src = 'assets/enter.png'; 
        this.sound = new Sound("assets/bgmusic.mp3");
        
        this.coord = {
            x : 150,
            y : 200,
            w : 100,
            h : 100,
        }
    }

    click() {
        this.sound.play();
        this.coord = {
            x: -100,
            y: -100,
            w: this.coord.w,
            h: this.coord.h
        }
    }


}