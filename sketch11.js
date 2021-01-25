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
    if (mouseIsPressed)  {
    textSize(20); 
    fill('white'); 
    noStroke();
    textAlign(CENTER, TOP); 
  text('(the door unlocks with the [key])', 0, height/2, width); 
  }  

}

//function keyPressed() {
//  gif.pause();
//}

function keyPressed() {
    if (keyCode === 191)
  gif.play();
}
