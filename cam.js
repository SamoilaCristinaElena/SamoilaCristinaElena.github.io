document.getElementById("id_logic_version").innerHTML = "Logic version: 2018.11.13.8";
document.getElementById("id_video").addEventListener("mousedown", on_touch);
document.getElementById("id_video").addEventListener("touchstart", on_touch);

function on_ok(stream)
{
  document.getElementById("id_video").srcObject = stream;
}
//............................
function on_error(e)
{
//console.log("eroare_camera");
alert("eroare_camera");

}
//............................

function start ()
{
var p ={audio:true,video:true};
navigator.mediaDevices.getUserMedia(p).then(on_ok).catch(on_error);
}
//...........................

function on_touch (e)
{
 var canvas = document.getElementById("id_canvas"); 
  var context = canvas.getContext("2d");
  var video = document.getElementById("id_video"); 
  context.drawImage(video, 0, 0);
}
