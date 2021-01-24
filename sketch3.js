let bubbles = [];



function setup() {
  createCanvas(windowWidth, windowHeight);
  photo = loadImage("https://dc551.4shared.com/img/apL-lD0Vea/s24/176de617690/sprite?async&rand=0.030729741182498715");

  
  //draw static from array
//   for (let i = 0; i < 10; i++){
//     let x = random(width);
//     let y = random(height);
//     let r = random(10,40);
//   bubbles[i] = new Bubble(x, y, r,random(255));
//   }
}

//function keyPressed() {


//}

// function mousePressed() {
//   let r = random(10,50);
//   let b = new Bubble(mouseX, mouseY, r, random(255));
//   bubbles.push(b);
// }

function draw() {
    
    textSize(20); 
    fill('#0f0'); 
    noStroke();
    textAlign(CENTER, TOP); 
    text('(press any key to clone yourself)', 0, height/2, width); 
  
  stroke('#0f0');
  line(pmouseX, pmouseY, mouseX, mouseY);
  for (let i = 0; i < bubbles.length; i++){
  bubbles[i].show();
  bubbles[i].move();
    if (keyIsPressed)
    {
  image(photo, mouseX, mouseY);

  }

  }
      if (keyIsPressed)  
      { let r = (20,20);
  let b = new Bubble(mouseX, mouseY, r, random(255));
  bubbles.push(b);
       
    textSize(20); 
    fill('white'); 
    noStroke();
    textAlign(CENTER, BOTTOM); 
    text('(move on to next page when you have had enough of yourself)', 0, height/2, width); 
                }
}

class Bubble {
  constructor(x, y, d, col) {
    this.x = x;
    this.y = y;
    this.d = d;
  }
  
  move() {
    this.x += random(-2,2);
    this.y += random(-2,2);
  }
  
  show() {
    stroke('#0f0');
    strokeWeight(1);
    fill('#0f0');
    circle(this.x, this.y, this.d)
  }
}