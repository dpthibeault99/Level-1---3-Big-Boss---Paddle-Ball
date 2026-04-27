var canvas;
var context;
var player;
var ball;
var timer;
var interval = 1000 / 60; // 60 fps

canvas = document.getElementById("myCanvas");
context = canvas.getContext("2d");

// the paddle
//---------------------(x, y, w, h, color)
player = new gameObject(canvas.width / 2, canvas.height , 300, 50, "#00ffff");
player.vx = 0;
player.vy = 0;

// the ball
ball = new Ball(canvas, context);
timer = setInterval(animate, interval);

function animate()
{
        context.clearRect(0, 0, canvas.width, canvas.height);

        net();


        // //The Score // 
        // context.fillStyle = "#000000";
        // context.font = "30px Arial";
        // context.fillText("P1:"+ p1Score, 400, 50);
        // context.fillText("P2:"+ p2Score, 550, 50)

        //player 1
        if (w)
        {
                player.y -= 4;
        }

        if (s)
        {
                player.y += 4;
        }
        //player 2
     
        boundry();

        //player 1
        // if (ball.collisionCheck(player))
        // {
        //         ball.x = player.right() + ball.radius;
        //         ball.color = "#615316";

        //         //player 1
        //         if (ball.y < player.y - (player.height / 6))
        //         {
        //                 ball.speedX = 5;
        //                 ball.speedY = -5;
        //         }
        //         else if (ball.y > player.y + (player.height / 6))
        //         {
        //                 ball.speedX = 5;
        //                 ball.speedY = 5;
        //         }
        //         else
        //         {
        //                 ball.speedX = 5;
        //                 ball.speedY = 0;
        //         }                
        // }

        //player 2

        // if (ball.collisionCheck(player2))
        // {
        //         ball.x = player2.left() - ball.radius;
        //         ball.color = "#452341";

        //         if (ball.y < player2.y - (player2.height / 6))
        //         {
        //                 ball.speedX = -5;
        //                 ball.speedY = -5;
        //         }
        //         else if (ball.y > player2.y + (player2.height / 6))
        //         {
        //                 ball.speedX = -5;
        //                 ball.speedY = 5;
        //         }
        //         else
        //         {
        //                 ball.speedX = -5;
        //                 ball.speedY = 0;
        //         }
        // }


        player.drawRect();
        player.move();

        // player2.drawRect();
        // player2.move();

        ball.drawBall();
        ball.update();
}


function boundry()
{
    if (player.y > canvas.height - player.height / 2)
    {
        player.y = canvas.height - player.height / 2;
    }

    if (player.y < player.height / 2)
    {
        player.y = player.height / 2;
    }

    // if (player2.y > canvas.height - player2.height / 2)
    //     {
    //     player2.y = canvas.height - player2.height / 2;
    //     }

    //     if (player2.y < player2.height / 2)
    //     {
    //     player2.y = player2.height / 2;
    //     }

}

function net()
{
    context.save();

    context.strokeStyle = "#ff0000"; 
    context.lineWidth = 10;

    context.beginPath();

    context.moveTo(canvas.width / 2, 0);
    context.lineTo(canvas.width / 2, canvas.height);

    context.stroke();
    context.restore();
}