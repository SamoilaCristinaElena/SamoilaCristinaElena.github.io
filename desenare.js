document.getElementById("id_logic_version").innerHTML = "Logic version: 2018.20.11.3";

var canvas = document.getElementById("id_canvas");
canvas.addEventListener("touchstart", on_touch);



function on_touch(e)

{
        for ( var i= 0 ; i<e.changedTouches.length; i++)
        {
          var context = canvas.getContext ("2d");
              context.beginPath();
               context.arc(  e.changedTouches.item(i).pageX,
                             e.changedTouches.item(i).pageY,
                             20,
                             0,2 *Math.PI
                             );
               context.stroke ();
     

    }



}
