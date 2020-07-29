var fixedRect, movingRect;
var rect1, rect2, rect3, rect4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "purple";
 
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "purple";
  
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  rect1 = createSprite(100, 400, 50, 25)
  rect1.shapeColor = "pink"
  rect1.velocityX = 5

  rect2 = createSprite(700, 400, 50, 25)
  rect2.shapeColor = "pink"
  rect2.velocityX = -5

  rect3 = createSprite(200, 200, 50, 25)
  rect3.shapeColor = "white"
  rect3.velocityX = 5
  rect3.velocityY = 5

  rect4 = createSprite(400, 400, 50, 25)
  rect4.shapeColor = "white"
  rect4.velocityX = -5
  rect4.velocityY = -5
}

function draw() {
  background("lightblue");  
  bounceoff(movingRect, fixedRect)
  bounceoff(rect1, rect2)
  bounceoff(rect3, rect4)
  drawSprites();
}

