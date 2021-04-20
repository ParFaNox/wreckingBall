const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground
var engine, world;
var ball
var brick1,brick4,brick5,brick6,brick7,brick8,brick9,brick10,brick11
var brick2,brick12,brick13,brick14,brick15,brick16,brick17,brick18,brick19
var brick3,brick20
var sling

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,1000);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(width/2,height-20, width, 10)
    
    ball=new Ball(20,20,100,100)
    sling=new SlingShot(ball.body, {x:100,y:60})
    brick1=new Bricks(500,height-200,100,50)
   brick4=new Bricks(500,height-210,100,50)
   brick5=new Bricks(500,height-220,100,50)
   brick6=new Bricks(500,height-230,100,50)
   brick7=new Bricks(500,height-240,100,50)
   brick8=new Bricks(500,height-250,100,50)
   brick9=new Bricks(500,height-260,100,50)
   brick10=new Bricks(500,height-270,100,50)
   brick11=new Bricks(600,height-210,100,50)
    brick2=new Bricks(600,height-220,100,50)
    brick12=new Bricks(600,height-230,100,50)
     brick13=new Bricks(600,height-240,100,50)
    brick14=new Bricks(600,height-250,100,50)
    brick15=new Bricks(600,height-260,100,50)
    brick16=new Bricks(600,height-270,100,50)
    brick17=new Bricks(600,height-280,100,50)
     brick18=new Bricks(600,height-290,100,50)
     brick19=new Bricks(600,height-300,100,50)
    brick3=new Bricks(600,height-310,100,50)
    brick20=new Bricks(600,height-320,100,50)
}
function draw(){
    background(255)
    Engine.update(engine);
    //strokeWeight(4);
    brick1.display()
    brick2.display()
    brick3.display()
    brick4.display()
    brick5.display()
    brick6.display()
    brick7.display()
    brick8.display()
    brick9.display()
    brick10.display()
    brick11.display()
    brick12.display()
    brick13.display()
    brick14.display()
    brick15.display()
    brick16.display()
    brick17.display()
    brick18.display()
    brick19.display()
    brick20.display()
    
    sling.display()
    ground.display()
    ball.display()
}

