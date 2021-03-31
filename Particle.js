class Particle {
    //circular bodies so x and y and radius
    constructor(x, y,r) {
//options to be added
        var options ={
            //bounciness
            restitution:0.4
        }

        this.r=r;
      //in matter we hv to specify the body shape
        this.body = Bodies.circle(x, y, this.r,options); 
        //different color for each ball      
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        //to add particle to our world
        World.add(world, this.body);

    }
    display() {
// namespacing this.body.position as var pos and for angle also we r doing namespacing
        var pos = this.body.position;
        var angle = this.body.angle;
//push pop to record and restore the properties of particle
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color);
        //or else it will not touch ground, stays in air
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }

};