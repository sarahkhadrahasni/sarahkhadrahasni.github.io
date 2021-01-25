var gif_createImg;

function preload() {
  gif_createImg = createImg("hearts.gif");
}

function setup() {
}

function draw() {
  // loads only first frame
  
  // updates animation frames by using an html
  // img element, positioning it over top of
  // the canvas.
  gif_createImg.position(0, 0);
}
