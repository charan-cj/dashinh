var car,ball,car1,car2;


function setup() {
  createCanvas(800,600);
  car = createSprite(700,200,100,80);
  car.shapeColor = "green";
  car1 = createSprite(700,300,100,80);
  car1.shapeColor = "green";
  car2 = createSprite(700,400,100,80);
  car2.shapeColor = "green";
  ball = createSprite(50,50,20,20);
  ball.shapeColor = "orange";

}

function draw() {
  ball.x = World.mouseX;
  ball.y = World.mouseY;
  background(255,255,255);  
   if (isTouching(ball,car)){
    car.shapeColor = "blue";
   }
    
  
  drawSprites();
}
function isTouching(shape1,shape2){
  shape1.x-shape2.x < shape1.width/2 + shape2.width/2;
  shape2.x-shape1.x < shape1.width/2 + shape2.width/2;
  shape2.y-shape1.y < shape1.height/2 + shape2.height/2;
  shape1.y-shape2.y < shape1.height/2 + shape2.height/2;

}
