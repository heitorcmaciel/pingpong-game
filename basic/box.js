class Box {
    coord;
    image;
    constructor(imageSrc) {        
        this.image = new Image();   // Create new image element
        this.image.src = imageSrc; 
        
        this.coord = {
            x : 295,
            y : 190,
            w : 60,
            h : 60,
        }
        
      
    }

}