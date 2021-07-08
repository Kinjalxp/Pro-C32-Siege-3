const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var myEngine,myWorld,ground,stand,stand2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var newblock1,newblock2,newblock3,newblock4,newblock5,newblock6,newblock7,newblock8,newblock9,newblock10,newblock11,newblock12,newblock13,newblock14,newblock15,newblock16;
var slingShot;
var polygon,polygon_Image;
var score = 0;

function preload(){
    polygon_Image = loadImage("sprites/polygon.png");
}

function setup(){
    var canvas = createCanvas(1500,800);
    myEngine = Engine.create();
    myWorld = myEngine.world;

    ground = new Ground(600,height,1200,20);
    stand = new Ground(390,600,180,20);
    stand2 = new Ground(750,400,180,20);

    /////////////////first block////////////
    //level two
    block8 = new Box(330,235,30,40);
    block9 = new Box(360,235,30,40);
    block10 = new Box(390,235,30,40);
    block11 = new Box(420,235,30,40);
    block12 = new Box(450,235,30,40);
    //level three
    block13 = new Box(360,195,30,40);
    block14 = new Box(390,195,30,40);
    block15 = new Box(420,195,30,40);
    //top
    block16 = new Box(390,155,30,40);

     /////////////////second block////////////
    //level two
    newblock8 = new Box(690,40,30,40);
    newblock9 = new Box(720,40,30,40);
    newblock10 = new Box(750,40,30,40);
    newblock11 = new Box(780,40,30,40);
    newblock12 = new Box(810,40,30,40);
    // //level three
    newblock13 = new Box(720,80,30,40);
    newblock14 = new Box(750,80,30,40);
    newblock15 = new Box(780,80,30,40);
    // //top
    newblock16 = new Box(750,120,30,40);

    polygon = new Polygon(100,200,40);

    World.add(myWorld,polygon);

    slingShot = new Slingshot(polygon.body,{x:100,y:200});
}
function draw()
{
    background(0);
    Engine.update(myEngine);

    textSize(30);
    fill("white");
    text("score = " +score, width-300,100);

    ground.display();
    
    stand2.display();
    stand.display();
    
    block8.display();
    
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    block13.display();
    block14.display();
    block15.display();
    block16.display();

    newblock8.display();
    newblock9.display();
    newblock10.display();
    newblock11.display();
    newblock12.display();
    newblock13.display();
    newblock14.display();
    newblock15.display();
    newblock16.display();

    block8.score();
    
    block9.score();
    block10.score();
    block11.score();
    block12.score();

    block13.score();
    block14.score();
    block15.score();
    block16.score();

    newblock8.score();
    newblock9.score();
    newblock10.score();
    newblock11.score();
    newblock12.score();
    newblock13.score();
    newblock14.score();
    newblock15.score();
    newblock16.score();

    slingShot.display();

    polygon.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{
        x:mouseX,
        y:mouseY
    })
}

function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(polygon.body);
    }
}