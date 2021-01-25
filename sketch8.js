let text1 = "..."
  +"Grab a flashlight."

let text2 = 
  "\n next page unlocked";


let counter = 0;
let counter2 = 10;

let isPressed = false;
 
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)
  //frameRate()(20);
  smooth();
  textSize(10);
  textFont("Arial");
      fill('magenta'); 



}
 
function draw() {
  
        if (mouseIsPressed){
    textFont("Arial");
    text("(press any key to continue)", 0, 190);

  
}
  //if (counter < text1.length())
 
  //text(text1.substring(0, counter), 0, 40, width, height);
  //counter++;
  text(text1.substring(0, counter), 0, 40, 
    width-20, height);
  
  if (keyIsPressed) {
              counter++;
      textFont("Arial", 10);
      text(text2.substring(0, counter), 0, 180, 
    width-20, height);
     textSize(35);

    
    
    
  }

  
}
 
function keyPressed() {
  isPressed = !isPressed;
  

}
 
//function mouseReleased() {
//  isPressed= false;
//}
