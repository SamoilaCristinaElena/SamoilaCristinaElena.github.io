document.getElementById("id_logic_version").innerHTML = "Logic version: 2018.10.30.2";

window.addEventListener("deviceorientation", la_schimbare_gyro);

function la_schimbare_gyro (e)
{
document .getElementById("id_x").innerHTMLL= e.beta;
document .getElementById("id_y").innerHTMLL= e.gamma;
document .getElementById("id_z").innerHTMLL= e.alpha;

var canvas = document.getElementById("id_canvas");
var context = canvas.getContext("2d");

  context.beginPath();
  context.arc(canvas.width /2, canvas.height/2,30,0,2* Math.PI);
  context.stroke();
  
}

