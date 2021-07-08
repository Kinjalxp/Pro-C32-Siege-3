class Box {
    constructor (x,y,width,height,angle){
        var options = {
            restitution: 0.8,
            friction: 1,
            density: 1,
            isStatic: false
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.angle = angle;
        this.visibility = 255;
        World.add(myWorld,this.body);
    }
    display(){
        //console.log(this.body.speed);

        if(this.body.speed < 12){
            var pos = this.body.position;
            var angles = this.body.angle;
            push();
            translate(pos.x,pos.y);
            rotate (angles);
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
            pop();
        }
        else{
            World.remove(myWorld,this.body);
            push ();
            this.visibility = this.visibility - 5;  
            tint(255,this.visibility);
            pop ();
            
        }
    }
    score(){
        if(this.visibility < 0 && this.visibility > -105){
            score++;
        }
    }
}