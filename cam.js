document.getElementById("id_logic_version").innerHTML = "Logic version: 2018.11.13.5";

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
