var hash = "$2a$12$GTSbgcwbvKFDvK3I7OAlh.o4RSEQi7cM02F79CVryV34tPTSI3ZEu" // 60 char bcrypt hash
var numb = hash.match(/\d/g);
numb = numb.join("");
console.log(numb);

let canvasSize = 800;
let r = 100;
let noiseScale = 0.02;
let flowerMask;
let rNoise;

function setup(){
  createCanvas(canvasSize, canvasSize, SVG);
  strokeWeight(3);
  background('#172231');
  angleMode(DEGREES);
  rectMode(CENTER);
  stroke('rgba(188, 0, 254,0.1)');
  noFill();

  // flowerMask = createGraphics(canvasSize, canvasSize);
  // flowerMask.stroke('rgba(188, 0, 254, 1)');
  // flowerMask.noFill();
  // flowerMask.strokeWeight(3);
  // flowerMask.angleMode(DEGREES);
  // flowerMask.beginShape();
  // for (let angle = 0; angle < 360; angle += 10){
  //   rNoise = noise(noiseScale) * 700;
  //   flowerMask.curveVertex(cos(angle) * rNoise, sin(angle) * rNoise);
  //   noiseScale = noiseScale + 0.01;
  // }
  // flowerMask.endShape(CLOSE);

}

function draw(){
  clear();
  fill('#172231');
  noStroke();
  rect(0, 0, canvasSize, canvasSize)
  drawFlower();
  // image(flowerMask, 0, 0)
  //save("mySVG.svg");
  noLoop();
}

function drawFlower(){

  // styles
  stroke('rgba(188, 0, 254,0.1)');
  noFill();

  // set center
  translate(width/2, height/2);

  // light circle
  let leavesBg = random(50, 100);

  for(let i = 0; i < leavesBg; i++){

    r = random(50, 400);
    beginShape();
    let pieceSize = random(720, 1500);
    for (let angle = random(0, 360); angle < pieceSize; angle += 5){
      rNoise = noise(noiseScale) * r;
      curveVertex(cos(angle) * rNoise, sin(angle) * rNoise);
      noiseScale = noiseScale + 0.05;
    }
    endShape();
  }

  // bold circle
  let leavesSm = 1;
  for(let i = 0; i < leavesSm; i++){

    drawingContext.shadowBlur = 10;
    drawingContext.shadowColor = 'rgba(255, 255, 255, .3)';
  
    stroke('rgba(188, 0, 254,.8)');
    r = random(300, 400);
    beginShape();
    let pieceSizeSm = random(4000, 6000);
    for (let angle = random(0, 360); angle < pieceSizeSm; angle += 5){
      rNoise = noise(noiseScale) * r;
      curveVertex(cos(angle) * rNoise, sin(angle) * rNoise);
      noiseScale = noiseScale + 0.03;
    }
    endShape();
  }

  // inner circle
  stroke('rgba(188, 0, 254,.8)');
  beginShape();
  for (let angle = 0; angle < 900; angle += 10){
    rNoise = noise(noiseScale) * 30;
    curveVertex(cos(angle) * rNoise, sin(angle) * rNoise);
    noiseScale = noiseScale + 0.01;
  }
  endShape();

}
