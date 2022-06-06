// var sizes = [];

// function setup() {
//   createCanvas(800, 300);
  
//   for (var i=0; i < 100; i++) {
//     var randomValue = random(5, 500);
//     sizes.push(randomValue);
//   }
// }

// function draw() {
//   background(220);
//   noFill();
//   strokeWeight(2);
  
//   for (var i = 0; i < sizes.length; i++) {
//     ellipse(width/2, height/2, sizes[i], sizes[i]);
//   }
  
// }

// var words = ['I','love','programming','with','Javascript'];
// var colors = [
//   [255,0,10],
//   [131, 56, 236],
//   [251, 86, 7],
//   [58, 134, 255],
//   [255, 190, 11]
// ];
// var toggle = true;

// function setup() {
//   createCanvas(800, 300);
//   textAlign(CENTER,CENTER);
//   frameRate(3);
// }
// function draw() {
  
//   var currentIndex = frameCount % words.length;
//   var currentWord = words[currentIndex];
//   var currentColor = colors[currentIndex];
//   if (toggle === true) {
//   background(currentColor);
//   fill(145,22,150);
//   textSize(45);
//   text(currentWord, width/2, height/2)
//     }
//   else return
// }
// function mousePressed() {
//   toggle = !toggle;
// }

// var pressed = false;
// var colors = [];

// function setup() {
//     createCanvas(800, 300);
//     background(0);
//     colors = [
//       [255,0,10],
//       [131, 56, 236],
//       [251, 86, 7],
//       [58, 134, 255],
//       [255, 190, 11],
//       [240, 10, 50],
//       [100, 75, 255]
//     ];
//     noStroke();
// }

// function draw() {
    
//     if (pressed === true) {
//       var randomIndex = parseInt(random(colors.length), 10);
//       var randomSize = random(200);
      
//       fill(colors[randomIndex]);
//       ellipse(random(width), random(height), randomSize, randomSize);
//     }
//   pressed = false;
// }

// function keyPressed() {
//     pressed = true;
// }

// function setup() {
//     createCanvas(800, 300);
//     rectMode(CENTER);
//     noStroke();
//     angleMode(DEGREES);
// }

// function draw() {
//     background(131, 56, 236);
//     fill(237, 34, 93);
    
//     push();
//     translate(width/2, height/2);
//     rotate(45);
//     rect(0, 0, 150, 150);
//     pop();
    
//     push()
//     translate(width/2, height/2);
//     rotate(30);
//     fill(255);
//     rect(0, 0, 75, 75);
//     pop();
//   }

// function rect(x, y, width, height, rotation) {
//     if (rotation === undefined) {
      
//     }
//     push();
//     translate(x, y);
//     rotate(rotation);
//     pop();
// }

var guessItem = null;
var interval = 100;
var results = [];
var solution;

function setup() {
  createCanvas(800,300);
}

function draw() {
  background(220);
  if (frameCount === 1 || frameCount % interval === 0) {
    solution = null;
    guessItem = new GuessItem(width/2, height/2, 10);
  }
  if(guessItem) {  
  guessItem.render();
  }
  
  if (solution === true) {
    background(255);
  }  else if (solution === false) {
    background(0);
  }
}

function keyPressed() {
  if (guessItem !== null) {
  guessItem.solve(key);
  solution = guessItem.solve(key);
  guessItem = null;
  } else {
    
  }
}

function GuessItem(x, y, scl) {
  this.x = x;
  this.y = y;
  this.scale = scl;
  this.scaleIncrement = 0.5;
  this.content = getContent();
  this.alpha = 255;
  this.alphaDecrement = 3;
  this.solve;
  
  function getContent() {
    return String(parseInt(random(10),10));
  }
  
  this.solve = function(input) {
    if(input === this.content) {
      this.solved = true;
    }  else {
      this.solved = false;
    }
    return this.solved;
  }
  
  this.render = function() {
    if(this.solved === false) {
      return;
    }
    push();
    fill(0, this.alpha);
    textAlign(CENTER,CENTER);
    translate(this.x,this.y);
    scale(this.scale);
    text(this.content, 0, 0);
    this.scale = this.scale + this.scaleIncrement;
    this.alpha = this.alpha - this.alphaDecrement;
    pop();
  }
}