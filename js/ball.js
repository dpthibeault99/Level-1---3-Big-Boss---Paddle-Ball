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

       update() {
        this.x += this.speedX;
        this.y += this.speedY;
       }
}