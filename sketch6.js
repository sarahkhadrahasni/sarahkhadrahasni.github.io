let vid;
let play = false;

function setup() {
  createCanvas(400, 400);
  // noCanvas();

  vid = createVideo("sbahn.mov");
  vid.size(400, 400);
  vid.volume(0);
  vid.noLoop();
  vid.hide(); 
  vid.pause();

  // hides the html video loader
  // vid.position(0.0);

}

function draw() {
  let img = vid.get();
  image(img, 0, 0); // redraws the video frame by frame in  
  
            if (mouseIsPressed)
{
    noStroke();
    fill('magenta');
  
      textAlign(CENTER, TOP); 

    text('(press any key to send a SBahn message)', 0, height/2, width); 

    }
}
function keyPressed() {
  vid.play();
}
