function preload() {
  bg=loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym21.png","images/gym22.png");
  eat = loadAnimation("images/eat1.png","images/eat2.png");
  drink = loadAnimation("images/drink1.png","images/drink2.png");
  move = loadAnimation("images/move.png","images/move1.png");
}


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  astronaut=createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.1;
  createEdgeSprite();
}

function draw() {
  background("iss");  


  Text("Up arrow = brushing",10,380);
  Text("Down arrow = gymming",10,370);
  Text("Left arrow = eating",10,360);
  Text("Right arrow = bathing",10,350);
  Text("m key = moving",10,340);

  astronaut.bounceOff(createEdgeSprite);

  if(keyDown("UP_ARROW")){
    astronaut.addAniamtion("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astroanut.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAniamtion("gymming",gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astroanut.velocityY = 0;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAniamtion("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astroanut.velocityY = 0;
  }

  if(keyDown("m")){
    astronaut.addAniamtion("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 3;
    astroanut.velocityY = 2;
  }
  drawSprites();
}