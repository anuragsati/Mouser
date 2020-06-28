var c = document.getElementById("gameloop");
var ctx = c.getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height= window.innerHeight;

ctx.fillStyle = "#FFF";

var mx, my, ex=0, ey=0;
var speed = 1;

ctx.fillRect(ex,ey, 20, 20);

c.addEventListener("mousemove", function(){
    mx = event.clientX;
    my = event.clientY;
});


var init = setInterval(function(){
    ctx.clearRect(0,0,c.width,c.height);

    if(mx > ex)
        ex += speed;
    else if(mx < ex)
        ex -= speed;

    if(my > ey)
        ey += speed;
    else if(my < ey)
        ey -= speed;

    
    if(mx == ex && my == ey){
        alert("you lost");
        clearInterval(init);
    }
        
    ctx.fillRect(ex, ey, 20, 20);


}, 1);