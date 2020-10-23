var fr,mr;
var ball1, ball2;
function setup() {
  createCanvas(800,400);
 
  fr = createSprite(200,200,50,50);
  fr.shapeColor = "green";

  mr = createSprite(400,200,50,50);
  mr.shapeColor = "blue";

  ball1 = createSprite(200,100,50,50);
  ball1.shapeColor = "red";
  ball1.velocityX = 2;

  ball2 = createSprite(400,100,50,50);
  ball2.shapeColor = "yellow";
  ball2.velocityX = -2;
}

function draw() {
  background(255,255,255);  
bouncing(ball1, ball2);

  mr.x = World.mouseX;
  mr.y = World.mouseY;
  if(touching(fr,mr)) {
mr.shapeColor = "red";
fr.shapeColor = "red";
  }
  else{
    mr.shapeColor = "blue";
    fr.shapeColor = "green";
  }
  increaseSize(ball2);
  increaseSize(ball1);

  decreaseSize(mr);
  decreaseSize(fr);
  drawSprites();
}
function increaseSize (obj1) {
obj1.scale = 2;
}

function decreaseSize (obj1){
  obj1.scale = 0.5;
}