var count =0,n=0,r=0;
window.onload = function(){loaded()};
function loaded(){

for(var i=0;i<10;i++){
    var uid = count.toString();
    var container = document.createElement("div");
    container.setAttribute("class", "holder");
    container.setAttribute("id", uid);
    container.setAttribute("draggable", "true");
    /*container.setAttribute("ondragstart", "drag(event)");
    container.setAttribute("ondragover", "dragallow(event)");
    container.setAttribute("ondrop", "drop(event)");*/
    document.body.appendChild(container);
    if (n==5) {
        n=0;
        r=r+1;
    }

    var t=150+(180*r);
    document.getElementById(uid).style.top = t.toString()+"px";
    var l = 70+(250*n);
    document.getElementById(uid).style.left = l.toString()+"px";
    var logo = document.createElement("img");
    logo.src = "google.png";
    logo.setAttribute("class", "icon");
    logo.setAttribute("draggable", "false");
    document.getElementById(uid).appendChild(logo);


    var text = document.createElement("p");
    text.innerHTML="Google";
    text.setAttribute("class", "text");
    document.getElementById(uid).appendChild(text);
    n=n+1;
    count = count +1;
}

}

$(document).ready(function(){
    $("#settings").click(function(){
    $("#pan").slideToggle();
});
   });