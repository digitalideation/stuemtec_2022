//let hash = "$2a$12$GTSbgcwbvKFDvK3I7OAlh.o4RSEQi7cM02F79CVryV34tPTSI3ZEu" // 60 char bcrypt hash
let canvasSize = 600;
let r = 50;
let noiseScale = 0.02;


function setup(){
  createCanvas(canvasSize, canvasSize);
  stroke(255);
  noFill();
  strokeWeight(1);
  background('#172231');
  angleMode(DEGREES);
}

function draw(){

  translate(width/2, height/2);

  beginShape();
  let angle = 0;
  while (angle < 360){
    rNoise = noise(noiseScale) * r;
    vertex(cos(angle) * rNoise, sin(angle) * rNoise);
    angle = angle + 10;
    noiseScale = noiseScale + 0.1;
  }
  endShape();
  noLoop();
}




// ====================================
//        geometric flower
// ====================================
// function setup() {
//   createCanvas(600, 650);
//   stroke(255);
//   strokeWeight(1);
//   textSize(30);
//   background('#172231');
// }

// function draw() {
//   var n1 = 12
//   var d1 = 10
//   fill(255);
//   var k = n1/d1;
//   translate(width / 2, height / 2);
//   noFill();
//   beginShape();
//   for (var a = 0; a < 360*d1; a=a+1) {
//     var r = 250*cos(radians(k*a));
//     var x = r*cos(radians(a));
//     var y = r*sin(radians(a));
//     vertex(x,y);
//   }
//   endShape(CLOSE);
// }