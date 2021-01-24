let giphy, url = 'https://media.giphy.com/media/m4hVBHp2apyuqf2o0G/giphy.gif',    
      

  isGifAtEnd = false;

//let cols = 5;
//let rows = 5;
//let img;

function preload() {
  giphy = loadImage(url);
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  //img = loadImage("bgtile.png");
  imageMode(CENTER);
  fill(33);
  textSize(27);
  textAlign(CENTER, CENTER);
  giphy.setFrame(giphy.numFrames() - 1);

  // console.log(giphy.numFrames());
}

function draw() {
  
//    for (var y=0; y < rows; y++){
//    for (var x = 0; x < cols; x++){
//      image (img, x*img.width, y*img.height);
//    }
//  }
  clear();
  imageMode(CORNER);
  image(giphy, 0, 0, width, giphy.height*width/giphy.width);  gifState();
  if (mouseIsPressed)  {
    textSize(20); 
    fill('white'); 
    noStroke();
    textAlign(CENTER, TOP); 
  text('(the door unlocks with the [key])', 0, height/2, width); 
  }

}

function gifState() {
  isGifAtEnd = false;
  if (giphy.getCurrentFrame() >= giphy.numFrames() - 1) {
    isGifAtEnd = true;
    giphy.pause();
  }
}

function keyPressed() {
    if (keyCode === 191)
  if (isGifAtEnd) giphy.reset();
}
