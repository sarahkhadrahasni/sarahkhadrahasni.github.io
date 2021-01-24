//Array for images

var images = ["fogarray2.gif","fogarray1.gif"];
var chosenImage;
var pos;
function preload(){
      pos= floor( random(images. length));
    // chosenImage= loadImage(images[pos]);
    chosenImage= createImg(images[pos]);
}
function setup() {
    createCanvas(windowWidth, windowHeight);
 
  
   
}
function draw() {
  // background(255)
 
    
}
