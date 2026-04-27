class Ball {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;

        this.x = canvas.width / 2;
        this.y = canvas.height / 2;

        this.radius = 50;
        this.color = "#ff00ff";

        this.speedX = 0;
        this.speedY = 0;
    }

     drawBall() {
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.context.fillStyle = this.color;
        this.context.fill();
        this.context.closePath();
    }

    gravity(){

    }

       update() {
        this.x += this.speedX;
        this.y += this.speedY;
       }

    left() {
    return this.x - this.radius;
}

right() {
    return this.x + this.radius;
}

top() {
    return this.y - this.radius;
}

bottom() {
    return this.y + this.radius;
}

collisionCheck(obj) {
    if (
        this.left() < obj.right() &&
        this.right() > obj.left() &&
        this.top() < obj.bottom() &&
        this.bottom() > obj.top()
    ) {
        return true;
    }

    return false;
}

       
}