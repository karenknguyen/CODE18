// STRIPPED DOWN VERSION OF A MAGIC 8 BALL – generates random responses once you click the triangle.

// for red, green, and blue color values
var h, s, b;
var eightBall = '';


function setup() {
  createCanvas(1664, 920);
  // Pick colors randomly
  h = random(255);
  s = random(255);
  b = random(255);

//  imageMode(CENTER);
}

function draw() {
  background(173, 211, 210);
  // Draw a rectangle
  strokeWeight(2);
  stroke(h, s, b);
  fill(h, s, b, 127);
  triangle(300, 750, 580, 200, 860, 750);
  noStroke();
  fill(0);
  textSize(32);
  textFont('LESS');
  text(eightBall,500,500,200,200);
}


// When the user clicks the mouse
function mousePressed() {
  var num = int(random(0,7));
  console.log(num);
  // Check if mouse is inside the circle
  var d = dist(mouseX, mouseY, 560, 400);
  if (d < 275) {
    // Pick new random color values
    h = random(255);
    s = random(255);
    b = random(255);
    fill(50);

    //when clicked, responses vary
    if(num==0){
      eightBall ='ASK THE LAST PERSON YOU SPOKE TO';
      console.log('The eight ball answered: It is certain');
    }else if(num==1){
      eightBall ='YES BETCH!!!';
      console.log('The eight ball answered: It is decidedly so');
    }else if(num==2){
      eightBall ='NADA';
      console.log('The eight ball answered: It is decidedly so');
    }else if(num==3){
      eightBall ='MAYBE! or wait, actually NEVER.';
      console.log('The eight ball answered: It is decidedly so');
    }else if(num==4){
      eightBall ='TRY AGAIN NEXT WEEK.';
      console.log('The eight ball answered: It is decidedly so');
    }else if(num==5){
      eightBall ='JUST DO IT!!';
      console.log('The eight ball answered: It is decidedly so');
    }else if(num==6){
      eightBall ='WHY ARE YOU EVEN ASKING THIS?';
      console.log('The eight ball answered: It is decidedly so');
    }else if(num==7){
      eightBall ='YES YES YES';
      console.log('The eight ball answered: It is decidedly so');
    } 

  //console.log('The eight ball answered: ' + eightBall);
  }
  
}