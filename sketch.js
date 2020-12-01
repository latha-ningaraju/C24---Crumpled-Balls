
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var d1, d2, d3;
var ground,paper;

function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	d1 = new Dustbin(1000,670,170,20);
	d2 = new Dustbin(905,620,20,120);
	d3 = new Dustbin(1095,620,20,120);

	ground = new Ground(600,690,1200,20);

	paper = new Paper(100,360,25);
}


function draw() {
  background(0);

  Engine.update(engine);

  d1.display();
  d2.display();
  d3.display();

  ground.display();
  paper.display();
}

function keyPressed() {
  	if (keyCode === RIGHT_ARROW){
    	Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-90});
	}
	  
	if (keyCode === LEFT_ARROW){
    	Matter.Body.applyForce(paper.body,paper.body.position,{x:-50,y:-90});
	}
}




