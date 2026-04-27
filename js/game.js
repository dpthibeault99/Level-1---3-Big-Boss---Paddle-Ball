var canvas;
var context;
var player;
var ball;
var timer;
var interval = 1000 / 60;

var frictionX = 0.9;
var gravity = 1;

canvas = document.getElementById("myCanvas");
context = canvas.getContext("2d");

player = new gameObject(canvas.width / 2, canvas.height, 300, 50, "#00ffff");
player.vx = 0;
player.vy = 0;

ball = new Ball(canvas, context);
ball.vx = 0;
ball.vy = 0;

timer = setInterval(animate, interval);

function animate()
{
    context.clearRect(0, 0, canvas.width, canvas.height);

    net();

    handleInput();
    handlePlayerBoundry();

    doHandleFriction();
    doHandleGravity();
    doUpdateBallPosition();
    doCheckBallBounds();
    collisionCheck();

    player.drawRect();
    player.move();

    ball.drawBall();
}

function handleInput()
{
    if (a)
    {
        player.x -= 4;
    }

    if (d)
    {
        player.x += 4;
    }
}

function handlePlayerBoundry()
{
    if (player.y > canvas.height - player.height / 2)
    {
        player.y = canvas.height - player.height / 2;
    }

    if (player.y < player.height / 2)
    {
        player.y = player.height / 2;
    }

    if (player.x + player.width / 2 > canvas.width)
    {
        player.x = canvas.width - player.width / 2;
    }

    if (player.x - player.width / 2 < 0)
    {
        player.x = player.width / 2;
    }
}

function doHandleFriction()
{
    ball.vx *= frictionX;
}

function doHandleGravity()
{
    ball.vy += gravity;
}

function doUpdateBallPosition()
{
    ball.x += ball.vx;
    ball.y += ball.vy;
}

function doCheckBallBounds()
{
    if (ball.y + ball.radius > canvas.height)
    {
        ball.y = canvas.height - ball.radius;
        ball.vy = 0;
    }

    if (ball.y - ball.radius < 0)
    {
        ball.y = ball.radius;
        ball.vy = 0;
    }

    if (ball.x + ball.radius > canvas.width)
    {
        ball.x = canvas.width - ball.radius;
        ball.vx = -ball.vx;
    }

    if (ball.x - ball.radius < 0)
    {
        ball.x = ball.radius;
        ball.vx = -ball.vx;
    }

    if (w && ball.y + ball.radius >= canvas.height)
    {
        ball.vy = -20;
    }
}

function net()
{
    context.save();

    context.strokeStyle = "#ff0000";
    context.lineWidth = 10;

    context.beginPath();
    context.moveTo(ball.x, ball.y);
    context.lineTo(player.x, player.y);
    context.stroke();

    context.restore();
}
function collisionCheck()
{
    if (ball.collisionCheck(player))
    {
        ball.y = player.top() - ball.radius;

        ball.vy = -20;
    }
}

