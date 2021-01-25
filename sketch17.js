let text1 = "..."
  +"You've reached the end of my quest for the truth."
  +"I went to Berlin as part of my exchange program and there was nothing to find."
  +"I wrote messages on the Sbahn, like bottles in the ocean."
  +"Locked my heart and threw the key into the lakeside by the Carl Zuckmayer bridge."
  +"I saw decoys behind windows who were only human in form."
  +"I left clues for no one to find."
  +"I have learnt to love the confines within the lies and disappeared for a while."
  +"From my seclusion I created an Utopia of the Self."
  +"A world I, only, inhabit."
  +"A world without disagreement and free from the other.";
  +"I found a sense of community within myself.";
  +"A world where everyone is one.";


 
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
