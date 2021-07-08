class Polygon{
    constructor(x, y, radius)
    {
        var options = {
            density: 1.5,
            friction: 1,
            restitution: 0.5
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage("sprites/polygon.png");
        World.add(myWorld,this.body);
    }

    display()
    {
        var pos = this.body.position;
        var angles = this.body.angle;
        push ();
        translate(pos.x,pos.y);
        rotate (angles);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop ();
    }
}