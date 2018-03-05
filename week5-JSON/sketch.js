
// depending on the magnitude, there's a tickle effect for earthquakes

// Pulling examples use USGS Earthquake API:
//   https://earthquake.usgs.gov/fdsnws/event/1/#methods
var earthquakes;
var x = 100;
var y = 100;
var size =50;
function preload() {
  // Get the most recent earthquake in the database
  var url =
   'https://earthquake.usgs.gov/earthquakes/feed/v1.0/' +
    'summary/all_day.geojson';
  earthquakes = loadJSON(url);
}

function setup() {
  //noLoop();
  createCanvas(800,800);
  var url =
   'https://earthquake.usgs.gov/earthquakes/feed/v1.0/' +
    'summary/all_day.geojson';
  loadJSON(url, drawEarthquake);
}

function draw() {
  background(200);
  var earthquakeMag = earthquakes.features[0].properties.mag;
  var earthquakeName = earthquakes.features[0].properties.place;
  x= x+random(-earthquakeMag,earthquakeMag);
  y= y+random(-earthquakeMag,earthquakeMag);
  fill(255,0,0);
  ellipse(x, y, 50,50);
  text(earthquakeName, 0, height - 30, width, 30);
  var earthquakeMag = earthquakes.features[1].properties.mag;
  var earthquakeName = earthquakes.features[1].properties.place;
  x= x+random(-earthquakeMag,earthquakeMag);
  y= y+random(-earthquakeMag,earthquakeMag);
  fill(0,255,0);
  ellipse(x+100, y, 50,50);
  text(earthquakeName, 50, height - 50, width, 30);

}

function drawEarthquake(earthquakes) {
  // Get the magnitude and name of the earthquake out of the loaded JSON
  var earthquakeMag = earthquakes.features[0].properties.mag;
  var earthquakeName = earthquakes.features[0].properties.place;
  x+=random(-earthquakeMag,earthquakeMag);
  y+=random(-earthquakeMag,earthquakeMag);
  ellipse(x, y, size,size);
  ellipse(width / 2, height / 2, 50, 50);
}