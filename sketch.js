var Cleber, car1, car2, Road;
var CleberImg, car1Img, car2Img, RoadImg;
var carsG;

var Play = 1;
var End = 0;
var gameState = 1;


function preload(){
CleberImg = loadImage("Cleber.png");
car1Img = loadImage("Car 1.png");
car2Img = loadImage("Car 2.png");
RoadImg = loadImage("Road.png");
}

function setup() {
 createCanvas(windowWidth,windowHeight);

 Road=createSprite(height/2,200);
 Road.addImage(RoadImg);
 Road.velocityX = -4;


 Cleber = createSprite(width/2,height-20,20,20);
 Cleber.addImage(CleberImg);
 Cleber.scale=0.08; 

 carsG =new Group();

}

function draw() {
    if(gameState===Play){
        background(0);
        Cleber.y = World.mouseY;
        
        edges= createEdgeSprites();
        Cleber.collide(edges);
        
      
         if(Road.x < width ){
           Road.x = width*2;
         }
        
          createCars();
}
if(carsG.isTouching(Cleber)) {
    gameState=End;
    
    Cleber.x=width/2;
    Cleber.y=height/2;
    Cleber.scale=0.6;
    
    carsG.destroyEach();
    carsG.setVelocityXEach(0);
     

 
}
   drawSprites();
}
  


    