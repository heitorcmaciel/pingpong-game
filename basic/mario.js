class Mario {
    coord;
    image;
    direction;
    walking;
    constructor(imageSrc) {        
        this.image = new Image();   // Create new image element
        this.image.src = imageSrc; 
        this.direction = 1;
        
        this.walking = null;
        this.coord = {
                x : 200,
                y : 190,
                w : 60,
                h : 60,
                velX : 5,
                velY : 5,
                speed : 7
            }
        }
     
       

    walk (direction) {

        if (this.walking == null) {
            this.walking = setInterval(function() {

                if (direction < 0) this.mario.coord.x -= 5;
                if (direction > 0) this.mario.coord.x += 5;
        
                
            }, 1000/50);
        
            setTimeout(() => {
                clearInterval (this.walking);
                this.walking = null;
            }, 600);
        }
        
    }

    jump () {
        
        if (this.coord.y == 190) {

            this.coord.y = (this.coord.y - 15);

            setTimeout(function() {
                this.mario.coord.y = (this.mario.coord.y + 15);
            }, 600);

        }
    }

    turn (dir) {
        if (dir == 'left') {
            this.coord.w = this.coord.w*-1;
            this.direction = -1;
            this.coord.x = (this.coord.x - this.coord.w);
            this.image.src = 'assets/mario2.png'; 
        } else  if (dir == 'right') {
            this.coord.w = this.coord.w*-1;
            this.direction = 1;
            this.coord.x = (this.coord.x - this.coord.w);
            this.image.src = 'assets/mario.png'; 
        }
    }


}
