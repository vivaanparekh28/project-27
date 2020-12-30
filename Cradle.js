class Cradle{
    constructor(){
        var option={
            isStatic:true
        }
        this.body=Bodies.rectangle(400,200,300,20,option)
        World.add(world,this.body)
    }
    display(){
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,300,20)
    }

}