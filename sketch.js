var Ship, Ground, sea;
var groundImage;
var Ship_moving
function preload(){
  Ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  groundImage = loadImage("sea.png")
}

function setup(){
  createCanvas(600,200);
  sea = createSprite(600,200)
  sea.addImage(groundImage)
  sea.velocityX=-5
  sea.scale=0.5
  // creating trex
Ship = createSprite(50,100,20,50);
  Ship.addAnimation("running", Ship_moving);
  
  //adding scale and position to trex
  Ship.scale = 0.15;
  Ship.x = 50
}


function draw(){
  //set background color 
  background("blue");
  
  if (sea.x<0){
    sea.x=sea.width/8
  }
  drawSprites();
}