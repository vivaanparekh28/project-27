
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	cradle=new Cradle()
	bob1=new Ball(400)
	bob2=new Ball(340)
	bob3=new Ball(460)
	bob4=new Ball(280)
	bob5=new Ball(520)
	attachment=new Rope(bob1.body,{x:400,y:200})
	attachment1=new Rope(bob2.body,{x:340,y:200})
	attachment2=new Rope(bob3.body,{x:460,y:200})
	attachment3=new Rope(bob4.body,{x:280,y:200})
attachment4=new Rope(bob5.body,{x:520,y:200})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  cradle.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  attachment.display()
  attachment1.display()
  attachment2.display()
  attachment3.display()
  attachment4.display()
  
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Body.applyForce(bob5.body,bob5.body.position,{x:55,y:-105})

	}
}



