class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        this.pointB = pointB;
        World.add(myWorld,this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){

       if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        push();
        stroke(48,22,8);

        if(pointA.x < 220){
        strokeWeight(8);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        line(pointA.x-20,pointA.y,pointB.x+30,pointB.y);
        }
        
        else{
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        line(pointA.x-20,pointA.y,pointB.x+30,pointB.y);
        }
        pop();
       }
    }
}