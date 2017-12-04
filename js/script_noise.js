var x_size =0;
var y_size=0;
var framerate;
var n=0;
var boxnumber=20;
//console.log(c,shapesize);

var randomColor = new Array();

function setup() {
  canvas = createCanvas(windowWidth*0.99, windowHeight*0.99);
  canvas.parent("p5canvas");
  background(0);
  colorMode(HSL);
  //angle = map(random(),0,1,0,360);
  framerate=createP('');
  x_size=width/boxnumber;
  y_size=height/boxnumber;
  //frameRate(4);
  let i=0;
  for (y = 0; y < height; y=y+y_size){
    for (x = 0; x < width; x=x+x_size) {
       randomColor[i]=map(noise(i*0.01),0,1,0,255);
       var boxcolor=color(randomColor[i],55,50)
       fill(boxcolor);
       stroke(boxcolor)
       rect(x, y, x_size, y_size);
       i++;
    }
  }
}
  function draw() {
  let x=0;
  let y=0;
  noStroke();
  let i =0;
  for (y = 0; y < height; y=y+y_size){
    for (x = 0; x < width; x=x+x_size) {
       randomColor[i]=(randomColor[i]+1)%511;
       if (randomColor[i]>255) {
         var boxcolor=color(map(randomColor[i],256,510,255,0),155,60);
       }
       else {
        var boxcolor=color(randomColor[i],155,20);
       }
       fill(boxcolor);
       stroke(boxcolor)
       rect(x, y, x_size, y_size);
       i++;
    }
  }
  framerate.html(floor(frameRate()))
}

function windowResized() {
  resizeCanvas(windowWidth*0.99, windowHeight*0.99);
  x_size=width/boxnumber;
  y_size=height/boxnumber;
}

function go() {
    let i=0;
  randomness=document.getElementById('randomness').value;
  tiles=document.getElementById('tiles').value;
  boxnumber=floor(sqrt(tiles));
  x_size=width/boxnumber;
  y_size=height/boxnumber;
  for (y = 0; y < height; y=y+y_size){
    for (x = 0; x < width; x=x+x_size) {
       randomColor[i]=map(noise(i*randomness),0,1,0,255);
       var boxcolor=color(randomColor[i],55,50)
       fill(boxcolor);
       stroke(boxcolor)
       rect(x, y, x_size, y_size);
       i++;
    }
  }
  redraw();

}
