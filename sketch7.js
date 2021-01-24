
var words = [];



function setup() {
  createCanvas(windowWidth, windowHeight);
  //Creates a total of 25 words that will reappear
  for (var a = 0; a < 25; a++) {
    words[a] = new Word();
    frameRate(4);
  }
}


function draw() {
  background(0);
  //A loop for the words to appear on the canvas
  for (var a = 0; a < words.length; a++) {
    //Each loop the words will move according to the function movement.
    words[a].movement();
    //How the words will be displayed accroding to the function textbox.
    words[a].textbox();
  }

}

// Word constructor 
function Word() {
  let positionx = random(width);
  let positiony = random(height);
  let move = random(50);

/* If the x position of the word is greater than the width of the canvas, it will postion the word off to the left side of the canvas at a random height. 
*/
  this.movement = function() {
    if (positionx > width) {
      positionx = -200;
      positiony = random(height);
    }
    //The x position of the word will move along the x axis between 0 and 50 pixels. 
    positionx = positionx + move;
  }

  //The function for how words will be displayed on the canvas. 
  this.textbox = function() {
    let terms = ['You can change the world!', 'Das herz lügt nicht.', 'Lügen haben kurze beine.', 'Ich bin hier.', 'Zuhause verlassen?', '52*28’59.2”N', '13*20’31.3”E', 'In memory of crowds', 'The key is [?]', 'I can change the world!', 'Utopia of the Self', 'Missing Something Here', 'I, (went to) Berlin (and everything was online)', '(1) Man = (1) Island', 'Fog Machine', 'Army of me']
    let randomTerms = random(terms);

/* Displays a white rectange with a red stroke using RADIUS mode using variables positionx and positiony for their x and y position with a width of 100 and height of 20. 
*/
    rectMode(RADIUS);
    fill('black');
    //stroke(139, 0, 0);
    rect(positionx, positiony, 180, 10);

/*Displays a word from the randomTerms variable in the center of the previous rectangle. 
*/
    rectMode(CENTER);
    fill('magenta');
    noStroke();
    text(randomTerms, positionx, positiony);
    textAlign(CENTER, CENTER);
    textSize(20);
  }
}