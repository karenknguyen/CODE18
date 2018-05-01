// make an empty array to hold our tiles
// pie chart help from p5

let tiles = [];
let tileSize = 400;

function preload() {
  // let table = loadTable('https://dl.dropboxusercontent.com/s/cgrl2ekchqrf9hp/Untitled%20form.csv?dl=1&raw=1', 'csv', 'header');
  let table = loadTable('https://dl.dropboxusercontent.com/s/mrq421mkmg31wng/survey.csv?dl=1&raw=1', 'csv', 'header');
  Tile.prototype.table = table;
}





function setup() {
  tiles.push(new KNTile(0, 0, tileSize));

  createCanvas(tileSize * 1, tileSize * 1);

  background(249, 175, 222, 70);

  noLoop();

  noStroke();
}

function draw() {
  for (var i = 0; i < tiles.length; i++) {
    tiles[i].update();
    tiles[i].display();
  }
}


