document.getElementById("id_logic_version").innerHTML = "Logic version: 2018.20.11.6";

var canvas = document.getElementById("id_canvas");
canvas.addEventListener("touchstart", on_touch);
canvas.addEventListener("touchmouve", on_touch_mouve);




var rect = canvas.getBoundingClientRect();


function on_touch(e)

{
        for ( var i= 0 ; i<e.changedTouches.length; i++)
        {
          var context = canvas.getContext ("2d");
              context.beginPath();
               context.arc(  e.changedTouches.item(i).pageX - rect.left,
                             e.changedTouches.item(i).pageY - rect.top,
                             20,
                             0,2 *Math.PI
                             );
               context.stroke ();
     

    }



}

function  on_touch_mouve(e)

 for ( var i= 0 ; i<e.changedTouches.length; i++)
        {
          var context = canvas.getContext ("2d");
              context.beginPath();
               context.arc(  e.changedTouches.item(i).pageX - rect.left,
                             e.changedTouches.item(i).pageY - rect.top,
                             20,
                             0,2 *Math.PI
                             );
               context.stroke ();
     

    }
