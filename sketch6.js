let gif;
let play = false;

function preload() {
  gif = loadImage('sbahn.gif');
}

function setup () {
  textFont("Helvetica", 16);
  
  gif.pause();

  
}

function draw() {
  createCanvas (windowWidth, windowHeight)
  background(255);
  image(gif, 0, 0);
  
              if (mouseIsPressed) {
    noStroke();
    fill('magenta');
    textAlign(CENTER, TOP); 
    text('(press any key to send a SBahn message)', 0, height/2, width); 

    }
}

//function keyPressed() {
//  gif.pause();
//}

function keyPressed() {
  gif.play();
}
