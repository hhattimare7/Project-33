var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var particle;

var divisionHeight=300;
var score =0;
var count =0;
var gameState ="play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  Engine.update(engine);
 
  textSize(20)
  text("Score : "+score,20,30);
  text("Rounds : "+count,690,30);

  text("500",20,790);
  text("500",100,790);
  text("500",180,790);
  text("500",260,790);
  text("100",340,790);
  text("100",420,790);
  text("100",500,790);
  text("200",580,790);
  text("200",660,790);
  text("200",740,790);

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   //if(frameCount%60===0){
   //  particles.push(new particle(random(width/2-30, width/2+30), 10,10));
  //   score++;
  // }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle != null){
    particle.display();
if (particle.body.position.y>770){
    if(particle.body.position.x>0 && particle.body.position.x<325){
      score = score + 500 ;
    }else if(particle.body.position.x>325 && particle.body.position.x<565){
      score = score + 100 ;
    }else if(particle.body.position.x>565 && particle.body.position.x<800){
      score = score + 200 ;
    }
  particle=null;
}
   }
   if (count>=5){
    gameState = "end"
    textSize(50)
    fill("yellow")
    text("GAME OVER",250,240);
  };
   
}

function mousePressed(){
  if (gameState !== "end"){
    count++;
    particle = new Particle(mouseX,-25,15);
    console.log(mouseX);
  }
}