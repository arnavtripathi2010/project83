var width= screen.width;
new_width= screen.width - 70;
new_height = screen.height - 300;

if(width < 922)
{
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}
function my_touchstart(e)
{
    console.log("my_touchstart");

    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}
    
    function my_touchmove(e)
    {
        console.log("my_touchmove");
         current_position_of_mouse_x = e.clientX[0] - canvas.offsetLeft;
         current_position_of_mouse_y = e.clientY[0] - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    
    console.log("last position of x and y coordinates = ");
    console.log("x =" + last_position_of_x + "y =" + last_position_of_y);

    console.log("current position of x and y coordinates = ");
    console.log("x =" + current_position_of_touch_x + "y =" + current_position_of_touch_y);

