var 
	imgLib = 'https://res.cloudinary.com/sarahsarahsarah/image/upload/',
	imgArray = ['v1610900874/sarahsarahsarah/crowdarray/crowd2_o9kqy9.png','v1610900873/sarahsarahsarah/crowdarray/crowd1_nyddgl.png',
'v1610900868/sarahsarahsarah/crowdarray/crowd3_isofwp.png','v1610900855/sarahsarahsarah/crowdarray/crowd4_cjgbdn.png'],

	img, dx, dy,
	pixels = [],
	r = Math.floor(Math.random() * imgArray.length),

	imgNew = new Image();

// Pick an image
imgNew.src = imgLib+imgArray[r];

function setup() {
  createCanvas(windowWidth, windowHeight);
  //createCanvas(imgNew.naturalWidth, imgNew.naturalHeight);
  img = loadImage(imgNew.src); 
  background(0); //black canvas
  noStroke(); //no outline
  
  
  for (var i=0; i<5000; i++){
    pixels.push(new pixel());
  }
}

function draw(){

    if (mouseIsPressed)
    {
    textSize(20); 
    fill('white'); 
    noStroke();
    textAlign(CENTER, BOTTOM); 
    text('Hey there,\n Could you help me remember something?\n Show me a crowd. \n (Press and hold any key to continue.)', 0, height/2, width); 
  }
  
if (keyIsPressed)
{
  for (var i=0; i<pixels.length; i++){
    pixels[i].update();
    
  }
}
}

function pixel(){
  this.x = random(width); //random initial position
  this.y = random(height); 
  
  this.update = function(){
    dx = random(-1, 1); //random ∆x
    dy = random(-1, 1); //random ∆y
    this.x += dx;
    this.x= constrain(this.x,0,width);
    this.y += dy;
    this.y = constrain(this.y,0,height);

    var color = img.get(this.x, this.y); // color of pixel in image
    fill(color);
    ellipse(this.x, this.y, 2, 2);
  }
}
