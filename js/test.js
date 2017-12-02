var x_size =0;
var y_size=0;
var framerate;
var n=0;
var boxnumber=10;
//console.log(c,shapesize);
function setup() {
  canvas = createCanvas(windowWidth*0.99, windowHeight*0.99);
  background(0);
  colorMode(RGB);
  //angle = map(random(),0,1,0,360);
  framerate=createP('');
  x_size=width/boxnumber;
  y_size=height/boxnumber;
}

function draw() {

  for (let x = 0; x < width; x=x+x_size) {
    for (let y = 0; y < height; y=y+y_size) {
      var randomval1=map(noise ( winMouseX  * random()),0,1,0,255);
      var randomval2=map(noise (winMouseY  * random()),0,1,0,255);
      var randomval3=map( noise ( winMouseX  * winMouseY),0,1,0,255);
      fill(randomval1,randomval2,randomval3);
      //console.log(randomval);
      noStroke();
      rect(x, y, x_size, y_size);
    }
  }
  framerate.html(floor(frameRate()))

}
