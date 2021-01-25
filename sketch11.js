let gif;
let play = false;

function preload() {
  gif = loadImage('door.gif');
}

function setup () {
  textFont("Helvetica", 16);
  
  gif.pause();
  
  
}

function draw() {
  createCanvas (windowWidth, windowHeight)
  background(255);
  image(gif, 0, 0);
}

//function keyPressed() {
//  gif.pause();
//}

function keyPressed() {
    if (keyCode === 191)
  gif.play();
}
