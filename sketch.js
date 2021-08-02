function preload() {
  bg = loadImage("image/iss.png");
  sleep = loadAnimation("image/sleep.png");
  brush = loadAnimation("image/brush.png");
  gym = loadAnimation("image/gym21.png","image/gym22.png");
  eat = loadAnimation("add image urls here");
  drink = loadAnimation("add image urls here");
  move = loadAnimation("add image urls here");
}
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();

  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;

  Instructions;
  Up_Arrow = Brushing
  Down_Arrow = Gymming
  Left_Arrow = Eating
  Right_Arrow = Bathing
  m_key = Moving

  astronaut = createEdgeSprite(45,50);
  astronaut.bounceOffEdges;
  

  if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing",brush);
  astronaut.changeAnimation("brushing");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;

  if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gymming",gym);
  astronaut.changeAnimation("gymming");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;

  if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("eating",eat);
  astronaut.changeAnimation("eating");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;

  if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("bathing",bath);
  astronaut.changeAnimation("bathing");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;  
  
  if(keyDown("m")){
  astronaut.addAnimation("moving",move);
  astronaut.changeAnimation("moving");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}