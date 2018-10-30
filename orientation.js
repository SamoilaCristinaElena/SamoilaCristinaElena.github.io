document.getElementById("id_logic_version").innerHTML = "Logic version: 2018.10.30.1";

window.addEventListener("deviceorientation", la_schimbare_gyro);

function la_schimbare_gyro (e)
{
document .getElementById("id_x").innerHTMLL= e.beta;
document .getElementById("id_y").innerHTMLL= e.gamma;
document .getElementById("id_z").innerHTMLL= e.alpha;

}


