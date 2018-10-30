addEventListener("deviceorentation", la_schimbare_gyro);

function la_schimbare_gyro (e)
{
document .getelementById("id_x").innerHTMLL= e.beta;
document .getelementById("id_y").innerHTMLL= e.gamma;
document .getelementById("id_z").innerHTMLL= e.alpha;

}
}

