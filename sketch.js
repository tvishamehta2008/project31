 const Engine = Matter.Engine;
 const  World = Matter.World;
 const Events = Matter.Events;
const  Bodies = Matter.Bodies;

var engine, world;
var ground;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;
var score=0;
function setup() {
  createCanvas(800,800);
  engine=Engine.create();
  world=engine.world;
  ground= new Ground(width/2,height,width,20);
  //using the following also we can create but we are encouraged to use arrays
 // division1= new Division(100,600,5,300);
 //we are starting from 0 and creating divisions 80 pixels apart till the width
 for (var k=0;k<=width;k=k+80){
  //adding a new element to divisions array
  //instead of a new variable we are directly writing new divisions inside the push
  
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
   }
   //draw a line of plinkos startinng from x=75 and till the width and with a gap of 50 pixels 
   for (var j = 75; j <=width; j=j+50) 
{

   plinkos.push(new Plinko(j,75));
}
for (var j = 100; j <=width; j=j+50) 
{

   plinkos.push(new Plinko(j,120));
}
for (var j = 75; j <=width; j=j+50) 
{

   plinkos.push(new Plinko(j,160));
}
for (var j = 100; j <=width; j=j+50) 
{

   plinkos.push(new Plinko(j,200));
}
for (var j = 75; j <=width; j=j+50) 
{

   plinkos.push(new Plinko(j,240));
}
for (var j = 100; j <=width; j=j+50) 
{

   plinkos.push(new Plinko(j,280));
}
}

function draw() {
  background(0); 
  text("Score : "+score,20,30); 
  Engine.update(engine);
  ground.display();
 // division1.display();
 for(var k=0;k<divisions.length;k++)
 {
   divisions[k].display() ;
 }
 //after every 60 frames particles are created at a random x pos and y 10 and radius 10 
 //and added in particles array using particles.push
 if(frameCount%60===0){
  particles.push(new Particle(random(width/2-100, width/2+100), 10,10));
  score++;
}
// the particles that are pushed in its array are displayed one by one

 for (var j = 0; j < particles.length; j++) {
   
  particles[j].display();
}
for(var i=0;i<plinkos.length;i++){
  plinkos[i].display();
}
 
}