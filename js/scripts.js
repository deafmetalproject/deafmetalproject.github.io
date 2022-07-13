var vid = document.getElementById("vid");
var slider = document.getElementById("slider");

/*document.addEventListener("DOMContentLoaded", function(){
    console.log("This runs");
    vid.removeAttribute("muted");
    vid.muted = false;
    vid.volume = 1;
    vid.play();
    //playVid();
});*/

/*var playVid = setTimeout(function() {
  vid.play();
}, 4000);
*/

vid.onclick = function() {
    vid.volume = 0.1;
    vid.play();
};

slider.oninput = function() {
    vid.volume = slider.value / 100;  
    console.log("Value: " + slider.value);
};

function playVid() {
    vid.play();
}