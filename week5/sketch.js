
// SPIRIT ANIMAL QUIZ

// Based on class code for week 5 (Brian Ma)

let sceneStates = Object.freeze({
  INTRO: 0,
  TUTORIAL: 1,
  JUAN: 2,
  DOS: 3,
  TRES: 4,
  CUATRO: 5,
  CINCO: 6,
  SEIS: 7,
  RESULTS: 8
});

let currentState = sceneStates.INTRO;

let keyOn = false;
/*let tutorialTimer;

let gameTimer;
let gameTimePressed;
const timeForGame = 5000;*/

function setup() {
  createCanvas(1600, 900);
}

function draw() { 
  drawScene();
  checkTransition();
  keyOn = false;
}

function drawScene() {
  switch(currentState) {
    case sceneStates.INTRO:
      background(100 + sin(frameCount * 0.05) * 50, 100 + sin(frameCount * 0.06) * 50, 100 + sin(frameCount * 0.07) * 50);
      fill(255);
      textSize(70);
      textFont('Courier New');
      textAlign(CENTER, CENTER);
      text("WHICH SPIRIT ANIMAL ARE YOU?\n\ PUSH ANY KEY TO BEGIN", width/2, height/2);
      break;

    case sceneStates.TUTORIAL:
      background(247, 247, 154);
      fill(0);
      textSize(48);
      textAlign(CENTER, CENTER);
      text("SIMPLE QUESTIONS, TALLY ALL YOUR POINTS.", width/2, height/2 - 160);
      textSize(32);
      text("EXAMPLE QUESTION: DO YOU PREFER...\nTHE SEA (+3)\nTHE EARTH (+1)?" , width/2, height/2);
      textSize(24);
      text("IF YOU SELECTED SEA, TALLY 3pts,\nIF YOU SELECTED EARTH, TALLY 1pt", width/2, height/2 + 120);
       textSize(24);
      text("AT THE END OF THE QUIZ,\nCHECK THE CHART TO SEE WHICH\nANIMAL YOU SCORED!!! LIT.", width/2, height/2 + 240);
      break;

    case sceneStates.JUAN:
      //type your quiz here 
      background(146, 205, 201);
      fill(160);
      textSize(48);
      textAlign(CENTER, CENTER);
      text("QUESTION JUAN.", width/2, height/2 - 160);
      fill(100);
      textSize(32);
      text("GUCCI GANG (-2)\nor\nMAN'S NOT HOT (+2)?" , width/2, height/2);
      break;

   case sceneStates.DOS:
      background(191, 228, 180);
      fill(160, 201, 197);
      textSize(48);
      textAlign(CENTER, CENTER);
      text("QUESTION DOS.", width/2, height/2 - 160);
      fill(100);
      textSize(32);
      text("APPLE (+10)\nor\nANDROID (+10)?" , width/2, height/2);
      break;

   case sceneStates.TRES:
      background(209, 180, 228);
      fill(12);
      textSize(48);
      textAlign(CENTER, CENTER);
      text("QUESTION TRES.", width/2, height/2 - 160);
      fill(9, 97, 48);
      textSize(32);
      text("PEACHES (+4)\nor\nCREAM (+2)?" , width/2, height/2);
      break;

   case sceneStates.CUATRO:
      background(242, 170, 103);
      fill(166, 227, 241);
      textSize(48);
      textAlign(CENTER, CENTER);
      text("QUESTION CUATRO.", width/2, height/2 - 160);
      fill(100);
      textSize(32);
      text("$ (+3)\nor\n<3 (+4)?" , width/2, height/2);
      break;

case sceneStates.CINCO:
      background(241, 166, 192);
      fill(241, 236, 166);
      textSize(48);
      textAlign(CENTER, CENTER);
      text("QUESTION CINCO.", width/2, height/2 - 160);
      fill(20);
      textSize(32);
      text("GOD (+8)\nor\n666 (-6)?" , width/2, height/2);
      break;

case sceneStates.SEIS:
      background(160, 232, 176);
      fill(232, 160, 179);
      textSize(48);
      textAlign(CENTER, CENTER);
      text("QUESTION 666.", width/2, height/2 - 160);
      fill(130);
      textSize(32);
      text("HARRY (+3)\nor\nHERBERT (+5)?" , width/2, height/2);
      break;

case sceneStates.RESULTS:
      background(10);
      fill(255);
      textSize(64);
      textAlign(CENTER, CENTER);
      text("YOU GOT LIL PUMP\njk calculate ur results here: ", width/2, height/2);
      textSize(24);
      text("7pts-13pts - CHUBBY SLOTH | 14pts-21pts - HEFTY UNICORN | 22pts-33pts - THICC PEGASUS ", width/2, height - 280);
      textSize(18);
      text("YAY", width/2, height - 100);

  }
}

function checkTransition() {
  switch (currentState) {
    case sceneStates.INTRO:
      if(keyOn) {
        currentState++;
        setupScene();
      }
      break;
    case sceneStates.TUTORIAL:
        if (keyOn) {
          currentState++;
          setupScene(currentState);
        }
      break;
    case sceneStates.JUAN:
      if (keyOn) {
          currentState++;
          setupScene(currentState);
        }
      break;
    case sceneStates.DOS:
      if (keyOn) {
          currentState++;
          setupScene(currentState);
        }
      break;
    case sceneStates.TRES:
      if (keyOn) {
          currentState++;
          setupScene(currentState);
        }
      break;
      case sceneStates.CUATRO:
      if (keyOn) {
          currentState++;
          setupScene(currentState);
        }
      break;
      case sceneStates.CINCO:
      if (keyOn) {
          currentState++;
          setupScene(currentState);
        }
      break;

      case sceneStates.SEIS:
      if (keyOn) {
          currentState++;
          setupScene(currentState);
        }
      break;

       case sceneStates.RESULTS:
      if (keyOn) {
          currentState++;
          setupScene(currentState);
        }
      break;
  }
}

function setupScene() {
  switch(currentState) {
    case sceneStates.INTRO:
      break;
    case sceneStates.TUTORIAL:
      break;
    case sceneStates.JUAN:
      break;
    case sceneStates.DOS:
      break;
    case sceneStates.TRES:
      break;
    case sceneStates.CUATRO:
      break;
    case sceneStates.CINCO:
      break;
    case sceneStates.SEIS:
      break;
    case sceneStates.RESULTS:
      break;
  }
}

function keyPressed() {
  keyOn = true;
}
