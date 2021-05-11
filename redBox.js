class RedBox {

    constructor(x, y, width, height) {
        var options = {

            isStatic: false,
            restitution: 0.1,
            frictions: 0.01,
            density:0.02

        }

        this.body = Bodies.rectangle(x, y, width, height, options);

        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display() {
        fill("red")
        if(this.body.speed<3){
            var angle =  this.body.angle;
            var pos=this.body.position;
            push();
            translate (pos.x,pos.y)
            rotate(angle)
            rectMode(CENTER)
            rect(0,0,this.width,this.height)
            pop();
          } else{
            World.remove(world, this.body)
            push()
            this.Visibility = this.Visibility-5
           tint(255,this.Visibility)
           rect(-100,-100,this.width,this.height)
           pop()
        }
    }
    }