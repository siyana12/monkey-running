
var monkey , monkey_running;
var banana ,bananaImage, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
   
  //creating the monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
  score = 0;
  var survivalTime = 0;
  
 


function draw() {
  background("black")

  //jump when the space key is pressed
    if(keyDown("space")&& monkey.y>= 200) {
        monkey.velocityY = -12;
    }
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
   
    ground.velocityX = -7;
   stroke("white");
  textSize(20);
  fill("white")
  text("Score: " + score, 200,50);
  
  stroke("white");
  textSize(20);
  fill("white");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("SurvivalTime:" + survivalTime, 100,60);
}
  spawnBananas();
  spawnObstacles();
  
  drawSprites();
}
function spawnObstacles() {
  if (frameCount % 90 === 0) {
  var obstacle = createSprite(400,327,20,20);
  obstacle.addImage(obstacleImage);
  obstacle.velocityX = -7;
  obstacle.lifetime = 200;
  obstacle.scale = 0.10;
  }

}
function spawnBananas() {
  if (frameCount % 60 === 0) {
  var banana = createSprite(200,0,20,20);
  banana.addImage(bananaImage);
  banana.velocityY = 8;
  banana.lifetime = 200;
  banana.scale = 0.1;
  }

}







