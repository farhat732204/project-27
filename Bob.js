class Bob{
    constructor(x,y){
        var options ={
            isStatic:false,
            restitution:1,
            friction:0,
            density:7.8,
        }
         this.body=Bodies.circle(x,y,25,options);
         this.radius=25;
    World.add(world,this.body);

    console.log(this.body)
    }
    
    display(){
        push();
        ellipseMode(RADIUS);
        fill("purple");
        ellipse(this.body.position.x,this.body.position.y,25,25);
        pop();
    }

}
