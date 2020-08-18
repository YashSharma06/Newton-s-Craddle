const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(1000, 900);

    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof = new Ground(400, 160, 700, 40);
	
	bob1 = new bob(170, 600);
	bob2 = new bob(290, 600);
	bob3 = new bob(410, 600);
	bob4 = new bob(530, 600);
	bob5 = new bob(650, 600);

	rope1 = new Rope(bob1.body, roof.body, -230, 0);
	rope2 = new Rope(bob2.body, roof.body, -110, 0);
	rope3 = new Rope(bob3.body, roof.body,  0, 0);
    rope4 = new Rope(bob4.body, roof.body, 120, 0);
	rope5 = new Rope(bob5.body, roof.body, 240, 0);

	Engine.run(engine);
  
}


function draw() {

  background(150);
  drawSprites();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-350,y:-350});
	}
}

