class Ball{
    constructor(x){
        var options={
            isStatic:false
        }
        this.body=Bodies.circle(x,500,30,options)
        World.add(world,this.body)

    }
    display(){
        push()
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,30);
        pop()
    }
}