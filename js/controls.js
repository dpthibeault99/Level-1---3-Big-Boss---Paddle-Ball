var a = false;
var d = false;
var w = false;
var s = false;
var left = false;
var right = false;
var up = false;
var down = false;

document.addEventListener("keydown", press);
document.addEventListener("keyup", release);


function press(e)
{
    console.log("Pressed " + e.keyCode);
    // WASD
    if (e.keyCode == 65)
    {
        a=true;
    }
    if (e.keyCode == 68)
    {
        d=true;
    }
    if (e.keyCode == 87)
    {
        w=true;
    }
    if (e.keyCode == 83)
    {
        s=true;
    }
    // Arrow Keys
    if (e.keyCode == 38)
    {
        up=true;
    }
    if (e.keyCode == 40)
    {
        down=true;
    }
    if (e.keyCode == 37)
    {
        left=true;
    }
    if (e.keyCode == 39)
    {
        right=true;
    }
}

function release(e)
{
    console.log("Pressed " + e.keyCode);
    // WASD
    if (e.keyCode == 65)
    {
        a=false;
    }
    if (e.keyCode == 68)
    {
        d=false;
    }
     if (e.keyCode == 87)
    {
        w=false;
    }
    if (e.keyCode == 83)
    {
        s=false;
    }
    // Arrow Keys
    if (e.keyCode == 38)
    {
        up=false;
    }
    if (e.keyCode == 40)
    {
        down=false;
    }
    if (e.keyCode == 37)
    {
        left=false;
    }
    if (e.keyCode == 39)
    {
        right=false;
    }
}

