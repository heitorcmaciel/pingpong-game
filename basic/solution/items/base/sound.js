class Sound {

  song;
  constructor(songPath) {
    this.song = new Audio();
    this.song.src = songPath;
  }


  play () {
    this.song.play();
  }

  stop () {

  }

  pause () {

  }

}