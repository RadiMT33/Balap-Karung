let player1,player2;
let x1finish, y1finish, x2finis, y2finish;
let x1start, y1start, x2start, y2start;
let sfxjump;

function preload() {
  soundFormats('mp3')
  sfxjump = loadSound('jump.mp3')
  sfxWin = loadSound('jump.mp3')
}

function setup() {
  createCanvas(600, 400);
  
  player1 = new Player('red',100)
  player2 = new Player('blue',300)
  
  x1finish = 500
  y1finish = 30
  x2finish = x1finish
  y2finish = height - y1finish
  
  
  x1start = 100
  y1start = 30
  x2start = x1start
  y2start = height - y1start
}

function draw() {
  background(220, 200, 100);
    
    player1.tampilkan()
    player2.tampilkan()

    player1.finish()
    player2.finish()
  
    line(x1finish, y1finish, x2finish, y2finish)
    line(x1start, y1start, x2start, y2start)
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    player1.maju()
    sfxjump.play()
  }
  
  else if(keyCode === RIGHT_ARROW){
    player2.maju()
    sfxjump.play()
  }
}