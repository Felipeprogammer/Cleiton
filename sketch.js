var box
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,40,40)
}

function draw() 
{
  background(30);




drawSprites()

if(keyDown(RIGHT_ARROW)) {
box.position.x = box.position.x + 5;
}
if(keyDown(LEFT_ARROW)) {
  box.position.x = box.position.x - 5;
}


}




