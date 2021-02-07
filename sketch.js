const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stick;
var ball1,ball2,ball3,ball4,ball5;
var chain1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	stick = new Stick(400,100,500,40);
  ball1 = new Balls(200,500,50);
  ball2 = new Balls(300,500,50);
  ball3 = new Balls(400,500,50);
  ball4 = new Balls(500,500,50);
  ball5 = new Balls(600,500,50);
	
  chain1 = new Chain(ball1.body,stick.body,-ball1Diameter*2,0);

}


function draw() {
  background("skyblue");

  stick.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  chain1.display();
  
  drawSprites();
 
}



