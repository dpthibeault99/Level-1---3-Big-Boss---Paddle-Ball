var canvas;
var context;
var player;
var p1Score = 0;
var ball;
var timer;
var interval = 1000 / 60;

var frictionX = 0.9;
var gravity = 1;
var vy = 0;
var vx = 0;

var playerFriction = 0.85;
var playerSpeed = 1.5;
var playerMaxSpeed = 15;


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

    Score();

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
    if (a || left)
    {
        player.vx -= playerSpeed;
    }

    if (d || right)
    {
        player.vx += playerSpeed;
    }

    if (player.vx > playerMaxSpeed)
    {
        player.vx = playerMaxSpeed;
    }

    if (player.vx < -playerMaxSpeed)
    {
        player.vx = -playerMaxSpeed;
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
    player.vy *= player.vy;
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
        ball.vy = ball.vy * -.67;
        p1Score = 0;
        console.log("Bottomaaaaaaaa");
    }

    if (ball.y - ball.radius < 0)
    {
        ball.y = ball.radius;
        ball.vy = ball.vy;
        console.log("Topa");

    }

    if (ball.x + ball.radius > canvas.width)
    {
        ball.x = canvas.width - ball.radius;
        ball.vx = -ball.vx;
        console.log("right");

    }

    if (ball.x - ball.radius < 0)
    {
        ball.x = ball.radius;
        ball.vx = -ball.vx;
        console.log("Left");
    }

    // if (w && ball.y + ball.radius >= canvas.height)
    //  {
    //     ball.vy = -20;
    //  }
}

function net()
{
    context.save();

    context.strokeStyle = "#000000";
    context.lineWidth = 10;

    context.beginPath();
    context.moveTo(ball.x, ball.y);
    context.lineTo(player.x, player.y);
    context.stroke();

    context.restore();
}
function collisionCheck()
{
    if (ball.collisionCheck(player) && ball.vy > 0)
    {
        // put ball on top of paddle
        ball.y = player.top() - ball.radius;

        p1Score++;

        // find where ball hit the paddle
        let hitPoint = ball.x - player.x;

        let centerZone = player.width / 6;
        let innerZone = player.width / 3;

        // always bounce upward
        ball.vy = -25;

        // CENTER 1/3
        if (hitPoint > -centerZone && hitPoint < centerZone)
        {
            ball.vx = 0;
        }

        // INNER LEFT 1/6
        else if (hitPoint < -centerZone && hitPoint > -innerZone)
        {
            ball.vx = -ball.force;
        }

        // INNER RIGHT 1/6
        else if (hitPoint > centerZone && hitPoint < innerZone)
        {
            ball.vx = ball.force;
        }

        // OUTER LEFT 1/6
        else if (hitPoint <= -innerZone)
        {
            ball.vx = -ball.force * 5;
        }

        // OUTER RIGHT 1/6
        else if (hitPoint >= innerZone)
        {
            ball.vx = ball.force * 5;
        }
    }
}
function Score()
{
    context.fillStyle = "#000000";
    context.font = "30px Arial";
    context.fillText("Score:"+ p1Score, 50, 50);
}
