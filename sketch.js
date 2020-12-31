
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var SurvivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  //creating monkey 
   monkey=createSprite(50,350,900,10);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  
  
  
  ground=createSprite(400,350,900,10)
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
     
  
  //create Obstacle and Cloud Groups
  obstaclesGroup = createGroup();
  FoodGroup=createGroup();  

  
}


function draw() {
  background(255);
  
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score,500,50);
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+survivalTime,100,50);
  
  
  if(ground.x<0){
    ground.x=ground.width/2

}
  
  
  if(keyDown("space") && monkey.y >= 150){
    monkey.velocityY=-12;
    
    
    
  }
  
  //add gravity
  monkey.velocityY = monkey.velocityY + 2
  
  
  
  monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(ground);
  
banana();
obstacles();
  
 

  drawSprites(); 
}

 




function  banana(){
  
  
  if(frameCount% 80===0){
     food= createSprite(600,50,40,10) ;
    food.y = Math.round(random(120,200));
    food.addImage(bananaImage);
    food.velocityX = -3;
    food.scale=0.1;
    food.lifetime=400;
    
    FoodGroup.add(food)
}
  
    
  
}

function obstacles(){
  
  
  
  
   if(frameCount% 300===0){
     obstacle= createSprite(600,150,40,10) ;
    obstacle.y = Math.round(random(330,330));
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -3;
    obstacle.scale=0.1;
    obstacle.lifetime=400;
    
    obstaclesGroup.add(obstacle);
}
  
}
  
  
 /*if (frameCount % 300 === 0) {
     obstacle = createSprite(600,100,40,10);
    obstacle .y = Math.round(random(10,60));
    obstacle .addImage(obstacleImage);
       obstacle.velocityX = -(6+score/60);
    obstacle .scale = 0.1;
    obstacle .velocityX = -3;
   obstacle.y=50;
    
     //assign lifetime to the variable
    obstacle .lifetime =200 ;
  
    
    //adding cloud to the group
    obstaclesGroup.add(obstacle);
    
}
}




if(frameCount % 300===0){
    obstacle=createSprite(600,50,40,10);
    obstacle.addImage(obstacleImage);
       obstacle.velocityX = -(6+score/60);
   
   
    
    var rand = Math.round(random(1,2));
  
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
 }


}
    */


    
    
  
  

