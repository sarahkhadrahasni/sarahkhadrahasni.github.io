let text1 = "..."
  +"I'm like everyone else here.";
let text2 = 
  "\n next page unlocked";

let counter = 0;
let isPressed = false;
 
function setup() {
  createCanvas(windowWidth, windowHeight);
  //frameRate()(20);
  smooth();
  textFont("Arial", 35);

}

function mousePressed(){
  
 textFont("Arial", 10);
 text("(press any key to continue)", 0, 20);

}

function draw() {
   textFont("Arial", 35);
   fill('magenta');
  //if (counter < text1.length())
 
  //text(text1.substring(0, counter), 0, 40, width, height);
  //counter++;
  text(text1.substring(0, counter), 0, 40, 
    width-20, height);

  if (keyIsPressed) {
              counter++;
  }

  
}
 
function keyPressed() {
  isPressed = !isPressed;
  

}
