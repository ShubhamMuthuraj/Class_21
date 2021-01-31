var fixedRect,movingRect;
var fixed;

function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  fixed=createSprite(600,200,50,80);
  fixed.shapeColor="aquamarine";

}

function draw() {
  background(0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
 if(isTouching(movingRect,fixedRect))
 { 
   movingRect.shapeColor="blue";
   fixedRect.shapeColor="blue";
 }
 else if(isTouching(movingRect,fixed))
 {
  movingRect.shapeColor="blue";
  fixed.shapeColor="blue";
 }
 else{
  movingRect.shapeColor="green";
  fixed.shapeColor="green";
  fixedRect.shapeColor="green";
 }
  drawSprites();
}


