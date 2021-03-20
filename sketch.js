const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var world,umbrella;

function preload(){
  

}
function setup() {
  createCanvas(800,800);
engine=Engine.create()
  world=engine.world
drop=[]
umbrella=new Umbrella(200,300,300,400)
  


}
  
function draw() {
    background("black")
    Engine.update(engine)
    umbrella.display();
    if(frameCount%80 === 0){
      var maxDrop=500;
      for(var i=0; i<maxDrop;i++){
        drop.push(new Drop(random(0,800), random(0,800),5));
        }
    }
   
   for(var i=0;i<drop.length;i++){
 
drop[i].display()
drop[i].y+=5
   }
   

      
      
  }

