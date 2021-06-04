const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var snow;
var snowball;
var snowballArray = [];

function preload(){
  snow = loadImage("snow1.jpg");
}
 
 
 function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  Ground = new ground(400, 395, 800, 5);





    


}

function draw() {
  background(snow);
  Engine.update(engine);
  if (frameCount%20===0){
    snowballArray.push(new Snow(random(width/2-10,width/2+10),10));
   
  }
  if (frameCount%90===0){
    snowballArray.push(new Snow(random(10,800),10));
  }
  if (frameCount%60===0){
    snowballArray.push(new Snow(random(10,800),10));
  }
  if (frameCount%30===0){
    snowballArray.push(new Snow(random(10,800),10));
  }
  
  for (var i = 0; i < snowballArray.length; i++) {
    snowballArray[i].display();   
  }

 
    
  Ground.display();
  drawSprites();


}
