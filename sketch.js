const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone1;
var iron1;
var rubber1,rubber2,rubber3,rubber4,rubber5;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    hammer = new Hammer(10,100);
    stone1 = new Stone(500,100);
    iron1 = new Iron(200,100);
    rubber1 = new Rubber(700,50,50);
    rubber2 = new Rubber(710,50,50);
    rubber3 = new Rubber(720,50,50);
    rubber4 = new Rubber(730,50,50);
    rubber5 = new Rubber(740,50,50);

  


}

function draw(){
    background("limegreen");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone1.display();
    iron1.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    



    
 
}