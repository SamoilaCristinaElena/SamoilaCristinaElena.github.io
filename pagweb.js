var rudolf = false;
function modifica ()
{
document.getElementById("id_salut").innerHTML = "Hello";
  
  if (rudolf==false){
    document.getElementById("id_img").src = "mos craciun.png";
  rudolf=true;
}
else{
   document.getElementById("id_img").src = "rudolf.png";
   rudolf=false;
}
}
