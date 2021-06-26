var tower,tower_Img;
var door,door_Img,doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg; var invisibleBlockGroup, invisibleBlock; var gameState = "play"

function preload() {
     tower_Img=loadImage("tower.png");
     door_Img=loadImage("door.png");
     climberImg = loadImage("climber.png"); 
     ghostImg = loadImage("ghost-standing.png"); 
     spookySound = loadSound("spooky.wav");
     
     doorsGroup=new Group(); 
     
     
      
     
}

function setup() {
  createCanvas(600,600);
  tower=createSprite(300,300);
  tower.addImage(tower_Img);
  tower.velocityY=+1;
  
  
  
  climbersGroup = new Group(); 
  invisibleBlockGroup = new Group();
  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.3; 
  ghost.addImage("ghost", ghostImg);
}

function draw() {
  if (tower.y>400 ) {
  tower.y=300;
  }
  spawnDoors();
  drawSprites();

}

function spawnDoors()  { 
     if (frameCount%240 === 0) {
       door=createSprite(200,-50);
       door.addImage(door_Img);
       door.x=Math.round(random(120,400));
       door.velocityY=+4;
       door.lifetime=800;
       doorsGroup.add(door);
       var climber = createSprite(200,10);
       climber.addImage(climberImg);
       var invisibleBlock = createSprite(200,15);
       climber.velocityY = 1;
       invisibleBlock.velocityY = 1;
       ghost.depth = door.depth;
       ghost.depth +=1;
       climber.lifetime = 800;
       invisibleBlock.lifetime = 800;
}
     }
     


