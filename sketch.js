const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var crims;
var testBullet
var ground, playerTest

function setup() {
	createCanvas(1250, 600);
	engine = Engine.create();
	world = engine.world;
	world.gravity.y = 0;

	ground = new Ground(625, 580, 1250, 40)
	
	testBullet = new Bullet ()
	crims = new Criminal(100, 530)
	
	playerTest = new Player(1100, 535)

	Engine.run(engine);
}


function draw() {
  Engine.update(engine)
  background("skyblue");
  
  ground.display();
  playerTest.display();

  crims.display()
  crims.updateX()
  
  testBullet.display();
}
 
function keyPressed(){
	if(keyCode === LEFT_ARROW){
		testBullet.updateX();
	}
}
