
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree;
var ground;
var mango1, mango2;
var stone;
var boy;
var engine, world;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

tree= new Tree(950, 400, 450, 400);

	ground = new Ground(650, 590, width, 20);
	
	mango1= new Mango(950, 10, 30);
	mango2=new Mango(950,100,20);
	

	stone= new Stone(170, 500, 50, 50);

	boy=new Boy(100,520,200,200);
}


function draw() {
  rectMode(CENTER);
  background(0);
  createEdgeSprites();

tree.display();
 ground.display(); 
 mango1.display();
 mango2.display();
 stone.display();
 boy.display();
  
 detectCollision(stone,mango1);
 detectCollision(stone,mango2);
  
 
}
function mouseDragged(){
      Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    stone.fly();
  
}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x:235, y:420})
		launcherObject.attach(stone.body);
	}
}

function detectCollision(stone,mango) {
	mangoBodyPosition=mango.body.position
	stoneBodyPosition=stone.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=mango.r+stone.r)
	{
		Matter.Body.setStatic(lmango.body,false);
	}
}


