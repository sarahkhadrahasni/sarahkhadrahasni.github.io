//array of dancing me

let img;
const gifs = [];				// an array of images
var particles = [];		// Particle object array


function preload() {
  gifs[0] = img = createImg('dancingme1.gif');
         img.hide();

  gifs[1] = img = createImg('dancingme2.gif');
         img.hide();

  gifs[2] = img = createImg('dancingme3.gif');
         img.hide();

  gifs[3] = img = createImg('dancingme4.gif');
         img.hide();


}

function setup() { 
  img_elt = select('.gifs');
  createCanvas(windowWidth-10, windowHeight-10);
  imageMode(CENTER);
  img = gifs.length + 1;
} 

function draw() {
  
    if (mouseIsPressed)
    {
    textSize(20); 
    fill('magenta'); 
    noStroke();
    textAlign(CENTER, BOTTOM); 
    text('Is it normal to enjoy the isolation?\n [press any key to populate the area]', 0, height/2, width); 
  }
    // iterate over the array and display the objects
  for (var i = particles.length-1; i >= 0; i--) {
  	particles[i].show();
  	particles[i].shake();
    
    // when the object moves out of the canvas, delete the object 
    // from the array
    if (particles[i].y > height) {
    	particles.splice(i,1);
    }
    
    // keep the number of particles on the canvas under 80 
    if (particles.length > 80) {
      particles.shift();
    }
  }
  
}

function keyPressed() {
      //if the key is a s

  // when mouse is dragged add a new object to the end of the array
  // the content of the object is an image randomly selected from the face[] array
	var newParticle = new Particle(gifs[round(random(0,2))], mouseX, mouseY, random(5,80), random(1, 5));
	particles.push(newParticle);

  

  
}

// object declaration - constructor function
function Particle(t, x, y, si, sp) {
  this.content = t;
	this.x = x; 
  this.y = y;
  this.size = si;
  this.speed = sp;

}

// object methods
Particle.prototype = {
	constructor: Particle,
  
  // display the object
  show: function() {
    image( this.content, this.x, this.y, this.size, this.size);


  },

  
  // move the object around its (x, y) position
  shake: function() {
  	this.x += random(-5, 5);
    this.y += random(-5, 5);
  }
}



