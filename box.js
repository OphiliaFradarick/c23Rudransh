class Box{
    constructor(x,y,width,height){
        var options={
            restitution:1
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.w = width;
        this.height = height;
        World.add(world,this.body);
    }

    display(){
        var pos= this.body.position
        fill("red");
        rectMode(CENTER);
        rect(pos.x, pos.y,this.w, this.height);
    }
}