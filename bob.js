class bob {
    constructor(x,y) {
        var ball_options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,   
        }
        this.body = Bodies.circle( x, y, 60, ball_options);
        this.radius = 60;
        World.add(world,this.body);        

    }
    display(){
        
        var pos = this.body.position;
        push ();
        fill ("pink")
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        ellipse(0, 0, 60, 60);
        pop ();
    }
}