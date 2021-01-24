let img, maskBuffer, imageBuffer;

function preload() {
  img = loadImage('key.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  maskBuffer = createGraphics(200, 150);
}

function draw() {
  	background(255);
  
          if (mouseIsPressed)
{
    noStroke();
    fill('magenta');
    text("(click and drag to find the [key])", 650, 300);
    textAlign(CENTER);
  
}
    var r =map(mouseX,0,width,0,255);
	var g =map(mouseY,0,height,0,255);
	fill('magenta');
  //coordinate line
	text(mouseX +"," +mouseY,20,20);

  let imageBuffer = img.get();
  
  if (mouseIsPressed) {
    maskBuffer.ellipse(mouseX, mouseY, 60);
  }
  
  imageBuffer.mask(maskBuffer);
  image(imageBuffer, 600, 0 );
}