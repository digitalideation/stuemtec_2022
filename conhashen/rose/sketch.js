function setup() {
  createCanvas(600, 650);
  stroke(255);
  strokeWeight(1);
  textSize(30);
  background('#172231');
}

function draw() {
  var n1 = 12
  var d1 = 10
  fill(255);
  var k = n1/d1;
  translate(width / 2, height / 2);
  noFill();
  beginShape();
  for (var a = 0; a < 360*d1; a=a+1) {
    var r = 250*cos(radians(k*a));
    var x = r*cos(radians(a));
    var y = r*sin(radians(a));
    vertex(x,y);
  }
  endShape(CLOSE);
}