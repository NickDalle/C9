var box;
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,50,50)
}

function draw() 
{
  background(0,0,200);
if(keyDown("up")){
  box.velocityY = -3
}
if(keyDown("right")){
  box.x = box.x + 5
}
  drawSprites();
}




