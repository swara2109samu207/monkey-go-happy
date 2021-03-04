var PLAY=1;
var END=0;
var gameState=PLAY;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstaclesGroup
var score
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,600)  
  
monkey=createSprite(80,315,20,20) ;
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;
//monkeyImage.addImage(bananaImage)  
  
ground=createSprite(400,350,900,10) ;
ground.x=ground.width/2;
ground.velocityX=-4;
 console.log(ground.x) 
  

FoodGroup = new Group();
obstaclesGroup = new Group();  
  
score=0;  
  
   
}

function draw() {
 background("pink")
  
if(ground.x<0){
 ground.x=ground.width/2;
}  
  
if(gameState===PLAY){
  
if(keyDown("space")){
 monkey.velocityY=-12; 
}  
monkey.velocityY=monkey.velocityY+0.8;  
monkey.collide(ground) ;  
  
spawnFood();
  
spawnObstacles();  
  
  survivalTime=Math.ceil(frameCount/frameRate());
  
if(obstaclesGroup.isTouching(monkey)){
 gameState=END
}
}  
 else if (gameState===END){
 ground.velocityX=0;
monkey.velocityY=0;
obstaclesGroup.setVelocityXEach(0);
FoodGroup.setVelocityXEach(0);
obstaclesGroup.setLifetimeEach(-1);
FoodGroup.setLifetimeEach(-1) ;  
 } 

   
  


  

 
drawSprites();
fill("red");
text("score:"+score,500,50) ;

fill("black");
textSize(20);

text("Survival Time:"+survivalTime,100,50);  
 
}


function spawnObstacles(){
  
if(frameCount%300===0){
var obstacle=createSprite(800,320,10,40);
obstacle.velocityX=-6;  
obstacle.addImage(obstacleImage);

obstacle.scale=0.17;
obstacle.lifetime=300;
  
obstaclesGroup.add(obstacle);  
  
}
  
}

function spawnFood(){
if(frameCount%80===0){      
 var banana=createSprite(600,250,40,10);
 banana.y= random(120,200); 
 banana.velocityX=-5;
  
banana.lifetime=300; 
monkey.depth=banana.depth+1;
  
banana.addImage(bananaImage);  
banana.scale=0.1;  
  
FoodGroup.add(banana);  

}  
  
}













  




