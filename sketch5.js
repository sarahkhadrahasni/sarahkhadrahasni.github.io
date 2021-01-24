let pov;

function setup() {
  createCanvas(800, 466);
  pov = createVideo('pov.mov',600, 400);
  pov.loop();
  noStroke();
  pov.hide();
  noStroke();
  fill(0);  
  pixelDensity(1);
}
let x = 0;
function draw() {
  background(0);
  loadPixels();
	let lightRadius = 90;
  // We must also call loadPixels() on the PImage since we are going to read its pixels.
  pov.loadPixels();
  for (let y = 1; y < height; y++ ) {
    for (let x = 1; x < width; x++ ) {
      let loc = (x + y * width) * 4;
      // The functions red(), green(), and blue() pull out the three color components from a pixel.
      let r = pov.pixels[loc   ]; 
      let g = pov.pixels[loc + 1];
      let b = pov.pixels[loc + 2];

      // Calculate an amount to change brightness
      // based on proximity to the mouse
      let distance = dist(x, y, mouseX, mouseY);

      // The closer the pixel is to the mouse, the lower the value of "distance" 
      // We want closer pixels to be brighter, however, so we invert the value using map()
      // Pixels with a distance greater than the lightRadius have a brightness of 0.0 
      // (or negative which is equivalent to 0 here)
      // Pixels with a distance of 0 have a brightness of 1.0.
      let adjustBrightness = map(distance, 0, lightRadius, 2, 0);
      r *= adjustBrightness;
      g *= adjustBrightness;
      b *= adjustBrightness;

      // Constrain RGB to between 0-255
      r = constrain(r, 0, 255);
      g = constrain(g, 0, 255);
      b = constrain(b, 0, 255);
      
      // Set the display pixel to the image pixel
      pixels[loc    ] = r;
      pixels[loc + 1] = g;
      pixels[loc + 2] = b;
      pixels[loc + 3] = 255; // Always have to set alpha
    }
  }

  updatePixels();
  

}

function preload() {
  pov = createVideo("pov.mov");
  pov.loop()
  pov.hide();
 }
