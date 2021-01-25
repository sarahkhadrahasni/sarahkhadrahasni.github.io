
var brush = [];

function setup() {
	createCanvas(windowWidth, windowHeight);

	background('#0f0');
	for (var i = 0; i < 50; i++) {
		brush[i] = new Brush();

	}
}

function draw() {

  if (keyIsDown) 
 for (var i = 0; i < brush.length; i++) {

		brush[i].paint();
	  brush[i].update();
  if (mouseIsPressed)
    {
    textSize(20); 
    fill('white'); 
    noStroke();
    textAlign(CENTER, BOTTOM); 
    text('Emotionally speaking,\n I am inside a fog machine.\n The music is too loud, \n and I cant find my friends.', 0, height/2, width); 
  }
	}
}



function Brush() {
	this.x = random(width);
	this.y = random(height);
	this.angle = random(TWO_PI);

  this.clr = color(random(255), random(255), random(255), 5);

	this.paint = function() {

		var px = mouseX;
		var py = mouseY;
		var r = 10;
		var u = random(0.425, 1);

		fill(this.clr);
		noStroke();
		beginShape();
		for (var a = 0; a < TWO_PI; a += PI / 180) {
			vertex(px, py);
			px = this.x + r * cos(this.angle + a) * u;
			py = this.y + r * sin(this.angle + a) * u;
			r += sin(a * random(0.25, 2));
		}
		endShape();

	};

	// Increment angle variable by PI/2 when x or y hits boundaries
	this.change = function() {
		if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
			this.angle += HALF_PI;
		}
	};

	this.update = function() {


		this.x += 2 * cos(this.angle);
		this.y += 2 * sin(this.angle);
		this.angle += random(-0.15, 0.15);
	};

}
