// adds a memory into game
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage, ground;
var bananaGroup, obstacleGroup;
var score = 0;
var surivalTime = 0;





function preload(){

  
  // adds animation
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  //loads banana and obstacle images
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}



function setup() {
  createCanvas(600,400);
  console.log(height);
  //creates mnkey sprite
  monkey = createSprite(80,height - 300,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;

  //creates groudn sprite
  ground = createSprite(600,400,1000,100);
  ground.x = ground.width/2;
  ground.shapeColor="brown";
  ground.velocityX=-4;

  //creates a group
  obstacleGroup = new Group();
  bananaGroup = new Group();

}




function draw() {
  background("green");
  // assigns jump function for main sprite
    monkey.velocityY = monkey.velocityY + 0.4;
  
     if((touches.length > 0 || keyDown("space"))&& monkey.y >= height-90){ 
      monkey.velocityY = -12;
       touches = [];
    }
  //ground will reset
   if(ground.x<200) {
    ground.x=ground.width/2;
  }
  // assighn land for main sprite to move on
  monkey.collide(ground);
  //calling the function
  createObstacles();
  createBananas();


  drawSprites();
//assign score and survival time to canvas
  stroke("white");
textSize(20);
fill("white");
text("Score: "+ score, 400, 50);

stroke("white");
textSize(20);
fill("white");
survivalTime = Math.ceil(frameCount/frameRate());
text("Survival Time: "+ survivalTime, 100,50);
}


// creates obstacles existence
function createObstacles() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(400,335,10,40);
    obstacle.velocityX = -6;
    obstacle.addImage(obstacleImage);
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
    obstacleGroup.add(obstacle);
  }
}
// creates objects existence
function createBananas(){
  if(frameCount % 80 == 0){
    var banana = createSprite(500, Math.round(random(120 , 200), 20, 20));
    //assign scale and life time to banana
    banana.scale = 0.05;
    banana.velocityX = -4;     
    //Adds image of banana aswell as linkign to group
    banana.addImage(bananaImage);
    bananaGroup.add(banana);
  }
}
