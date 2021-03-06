class Shooter{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:100
        }
        this.bodyA=bodyA;
        this.pointB=pointB;
        this.shooter=Constraint.create(options);
        World.add(world,this.shooter);
        }

      fly(){
          this.shooter.bodyA=null;
      }  

      display(){
          if(this.shooter.bodyA!=null){
          push()
          var pointA=this.shooter.bodyA.position;
          var pointB=this.shooter.pointB
          line(pointA.x,pointA.y,pointB.x,pointB.y);
          pop()
      }  }
}