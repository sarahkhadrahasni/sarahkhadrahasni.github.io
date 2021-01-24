let airplane
var font;
var vehicles = [];
let angle = 0;


function preload() {
  font = loadFont('AvenirNextLTPro-Demi.otf');
  airplane = loadImage ('airplane.png');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  // textFont(font);
  // textSize(192);
  // fill(255);
  // noStroke();
  // text('train', 100, 200);

  var points = font.textToPoints('I, Berlin', 300, 300, 192, {
    sampleFactor: 0.25
  });
  
  

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);

  }
}

function draw() {
  background(255, windowWidth, windowHeight);
  stroke('#0f0');
  line(pmouseX, pmouseY, mouseX, mouseY);
  
        if (mouseIsPressed)
{
    noStroke();
    fill('magenta');
    text("(press any key to continue)", 690, 190);
    textAlign(CENTER);
  
}
      if (keyIsPressed)
    {
  noStroke();
  fill('magenta');
  textAlign(CENTER);

  text("I (went to) Berlin (and it was all online)", 910, 350);
  text("(next page unlocked)", 910, 450);

    }
     //text(mouseX + "," + mouseY, 20, 20);
      var imgx = mouseX;
      var imgy = pmouseY;
      var angle = atan2(mouseY - imgy, mouseX - imgx);
        push();
       // translate(imgx, imgy);
        rotate(angle);
        imageMode(CENTER);
        image(airplane, mouseX, mouseY, 100, 100)
        pop();

  
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
    
  }
  

}


