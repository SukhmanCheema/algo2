var rectangle1,rectangle2,rectangle3,rectangle4,rectangle5,rectangle6;

function setup() {
  createCanvas(800,400);
  rectangle1=createSprite(400,200,50,100);
  rectangle2=createSprite(200,40,50,100);
  rectangle1.shapeColor="red";
  rectangle2.shapeColor="blue";
  rectangle1.debug=true;
  rectangle2.debug=true;
  rectangle3=createSprite(20,200,50,100);
  rectangle3.shapeColor="white";
  rectangle3.debug=true;
  rectangle3.velocityX=2;
  rectangle4=createSprite(380,200,50,100);
  rectangle4.shapeColor="aqua";
  rectangle4.debug=true;
  rectangle4.velocityX=-2;
  rectangle5=createSprite(200,200,50,100);
  rectangle6=createSprite(600,200,50,100);
  rectangle5.shapeColor="red";
  rectangle6.shapeColor="red";
  rectangle5.debug=true;
  rectangle6.debug=true;
}

function draw() {
  background(0); 
  rectangle2.x=mouseX;
  rectangle2.y=mouseY; 
  
  if(rectangle4.x-rectangle3.x<=rectangle4.width/2+rectangle3.width/2
    &&rectangle3.x-rectangle4.x<=rectangle4.width/2+rectangle3.width/2
    ){
   rectangle4.velocityX=rectangle4.velocityX*(-1);
   rectangle3.velocityX=rectangle3.velocityX*(-1);
  }
  if(rectangle4.y-rectangle3.y<=rectangle3.height/2+rectangle4.height/2&&
    rectangle3.y-rectangle4.y<=rectangle4.height/2+rectangle3.height/2){
      rectangle4.velocityY=rectangle4.velocityY*(-1);
      rectangle3.velocityY=rectangle3.velocityY*(-1);
  }
  ;
  if(IsTouching()){

  rectangle2.shapeColor="green";
  rectangle1.shapeColor="pink";
  }else{
rectangle2.shapeColor="blue";
  rectangle1.shapeColor="red";
  }
  drawSprites();
  
}
function IsTouching(){
  if(rectangle2.x-rectangle1.x<=rectangle1.width/2+rectangle2.width/2&&
    rectangle1.x-rectangle2.x<=rectangle2.width/2+rectangle1.width/2&&
    rectangle1.y-rectangle2.y<=rectangle2.height/2+rectangle1.height/2&&
    rectangle2.y-rectangle1.y<=rectangle1.height/2+rectangle2.height/2){
   //
    return true;
  }else {
  
 return false;
  }
}