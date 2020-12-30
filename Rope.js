class Rope{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 200
        }
        this.attachment = Constraint.create(options);
        World.add(world, this.attachment);

}
display(){
    var bodyA = this.attachment.bodyA.position;
            var pointB = this.attachment.pointB;
            push();
            strokeWeight(4);
            
            line(bodyA.x, bodyA.y, pointB.x, pointB.y);
            pop();
}
    }
