

function setup() {
	createCanvas(900, 900);
}


function draw() {
  background(0);
  for (var i = 0; i <3; i++) {
    if(i==0){
      fill(204, 101, 192, 127);
    }else if (i==1){
      fill(241, 207, 183, 127);
    }else if (i==2){
      fill(241, 183, 239, 127);
    }
    rect(i*300,i*300,mouseX/5,300);
  }
}